'use client';

import axios from 'axios';
import { toast } from 'sonner';
import Markdown from 'react-markdown';
import { useState, useEffect, useRef } from 'react';
import { Loader2Icon, RefreshCw, Maximize2, Minimize2 } from 'lucide-react';
import { Input } from '../ui/input';

// Add a style tag for custom CSS
const CustomStyles = () => (
  <style jsx global>{`
    .mentions-input {
      width: 100%;
      position: relative;
    }

    .mentions-input__control {
      width: 100%;
      min-height: 44px;
      max-height: 120px;
      overflow-y: auto;
      border-radius: 6px;
      border: 1px solid hsl(var(--border));
      background-color: hsl(var(--background));
      transition: max-height 0.2s ease-in-out;
    }

    .mentions-input.expanded .mentions-input__control {
      max-height: calc(100vh - 250px);
      min-height: 200px;
    }

    .mentions-input__highlighter {
      padding: 9px 12px;
      padding-right: 40px;
      white-space: pre-wrap;
      word-wrap: break-word;
      word-break: break-word;
      overflow-wrap: break-word;
    }

    .mentions-input__input {
      padding: 9px 12px !important;
      padding-right: 40px !important;
      min-height: 44px;
      white-space: pre-wrap !important;
      word-wrap: break-word !important;
      word-break: break-word !important;
      overflow-wrap: break-word !important;
      overflow: auto !important;
      line-height: 1.5 !important;
      color: hsl(var(--foreground)) !important;
      font-size: 14px !important;
    }

    .mentions-input.expanded .mentions-input__input {
      max-height: 100%;
      min-height: 200px;
    }

    .mentions-input__suggestions__list {
      background-color: hsl(var(--background));
      border: 1px solid hsl(var(--border));
      border-radius: 6px;
      max-height: 200px;
      overflow-y: auto;
      z-index: 10;
    }

    .mentions-input__suggestions__item {
      padding: 6px 10px;
      border-bottom: 1px solid hsl(var(--border));
      color: hsl(var(--muted-foreground));
    }

    .mentions-input__suggestions__item--focused {
      background-color: hsl(var(--secondary));
      color: hsl(var(--foreground));
    }

    /* Fix for the textarea to properly wrap text */
    .mentions-input textarea {
      white-space: pre-wrap !important;
      word-wrap: break-word !important;
      overflow-wrap: break-word !important;
    }

    .expand-button {
      position: absolute;
      right: 10px;
      top: 10px;
      background: transparent;
      border: none;
      color: hsl(var(--muted-foreground));
      cursor: pointer;
      z-index: 5;
      padding: 4px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s ease;
    }

    .expand-button:hover {
      background-color: hsl(var(--secondary));
      color: hsl(var(--foreground));
    }
  `}</style>
);



const Chatview = ({
  //@ts-expect-error ignore
  activeProject,
  //@ts-expect-error ignore
  onGenerateStart,
  //@ts-expect-error ignore
  onGenerateEnd,
  showLuaToggle = true,
}) => {
  const [userInput, setuserInput] = useState('');
  const [message, setmessage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState({});
  const [mentionedFiles] = useState([]);
  const messagesEndRef = useRef(null);
  const [selectedFramework, setSelectedFramework] = useState('React');
  const [luaEnabled, setLuaEnabled] = useState(true);
  // const [expandedFolders, setExpandedFolders] = useState(new Set());
  const [failedMessage, setFailedMessage] = useState(null);
  const [isRetrying, setIsRetrying] = useState(false);
  const [isInputExpanded, setIsInputExpanded] = useState(false);

  const scrollToBottom = () => {
    //@ts-expect-error ignore
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [message, loading]);

  const fetchProjectFiles = async (projectId: string) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/${projectId}`
      );
      if (response.data?.codebase) {
        setFiles(response.data.codebase);
      }
    } catch (error) {
      //@ts-expect-error ignore
      if (error.response.data.error === 'No code found for project') {
        toast.error('No code found for project');
        return;
      }
      console.error('Error fetching project files:', error);
    }
  };



  // @ts-expect-error ignore
 
  const handleSubmit = async (e) => {
    e?.preventDefault();

    if (!userInput.trim() && !failedMessage) return;

    const messageToSend = failedMessage || userInput;

    // Reset failed message if we're retrying
    if (failedMessage) {
      setFailedMessage(null);
      setIsRetrying(true);
    }

    // Clear input unless we're retrying
    if (!isRetrying) {
      setuserInput('');
    }

    // Don't need this as we'll handle it with retry button
    // if (!activeProject) return;

    // Add the user message to the local messages immediately
    const tempUserMessageId = `temp-${Date.now()}`;
    const userMessage = {
      id: tempUserMessageId,
      content: messageToSend,
      role: 'user',
      timestamp: new Date().toISOString(),
    };

    // Only add user message to UI if we're not retrying
    if (!isRetrying) {
      // @ts-expect-error ignore
      setmessage((prev) => [...prev, userMessage]);
    }

    try {
      if (onGenerateStart) {
        onGenerateStart();
      }

      // Add a temporary loading message
      const tempSystemMessageId = `temp-${Date.now() + 1}`;
      // @ts-expect-error ignore
      setmessage((prev) => [
        // @ts-expect-error ignore
        ...prev.filter((m) => !isRetrying || m.id !== tempSystemMessageId), // Remove previous loading message if retrying
        {
          id: tempSystemMessageId,
          content:
            '<div class="loading-indicator"><Loader2Icon className="animate-spin" size={18} /></div>',
          role: 'assistant',
          timestamp: new Date().toISOString(),
          isLoading: true,
        },
      ]);

      // Scroll to bottom after adding messages
      setTimeout(scrollToBottom, 100);

      // Make API call
      const requestBody = {
        prompt: { role: 'user', content: messageToSend },
        projectId: activeProject.projectId,

        fileContext: mentionedFiles.reduce((acc, file) => {
          // @ts-expect-error ignore
          if (files[file.id]) {
            // @ts-expect-error ignore
            acc[file.id] = files[file.id];
          }
          return acc;
        }, {}),
        framework: selectedFramework,
        luaenabled: luaEnabled,
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/chat/`,
        requestBody
      );
      // @ts-expect-error ignore

      // Update messages, removing the loading indicator and adding the real response
      setmessage((prev) => [
        // @ts-expect-error ignore

        ...prev.filter((m) => m.id !== tempSystemMessageId), // Remove loading message
        {
          id: response.data.id || `msg-${Date.now()}`,
          content: response.data.content,
          role: 'assistant',
          timestamp: new Date().toISOString(),
        },
      ]);

      // Reset retry state if we were retrying
      if (isRetrying) {
        setIsRetrying(false);
      }

      // Scroll to bottom after receiving response
      setTimeout(scrollToBottom, 100);

      if (onGenerateEnd) {
        onGenerateEnd();
      }
      window.addEventListener('updateCodeview', (event) => {
        const customEvent = event as CustomEvent;
        if (customEvent.detail?.codebase) {
          const refreshEvent = new CustomEvent('refreshCodeview', {
            detail: {
              projectId: activeProject.projectId,
              codebase: customEvent.detail.codebase,
            },
          });
          window.dispatchEvent(refreshEvent);
        }
      });
    } catch (error) {
      console.error('Failed to send message:', error);
      // @ts-expect-error ignore

      // Remove the loading indicator
      setmessage((prev) => prev.filter((m) => !m.isLoading));

      // Store the failed message for retry
      // @ts-expect-error ignore
      setFailedMessage(messageToSend);

      // Reset retry state
      setIsRetrying(false);

      // Show error toast
      toast.error('Failed to send message. Please try again.');

      if (onGenerateEnd) {
        onGenerateEnd();
      }
    }
  };

  // Function to handle retry
  const handleRetry = () => {
    if (failedMessage) {
      // @ts-expect-error ignore
      handleSubmit();
    }
  };
  // @ts-expect-error ignore
  const renderMessageContent = (msg) => {
    if (!msg || !msg.content) {
      return '';
    }

    if (msg.role === 'user') {
      return msg.content;
    }

    try {
      // Check if content is already an object (might have been parsed earlier)
      if (typeof msg.content === 'object') {
        return msg.content.description || '';
      }

      // Try to parse as JSON
      const content = JSON.parse(msg.content);
      let markdownContent = '';
      if (content.description) {
        markdownContent += content.description + '\n\n';
      }
      return markdownContent;
    } catch (error) {
      // If JSON parsing fails, return the content as is
      console.log('Failed to parse message content as JSON:', error);
      return msg.content || '';
    }
  };

  // Add a new function to handle key press events
  // @ts-expect-error ignore
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      // @ts-expect-error ignore
      handleSubmit();
    }
  };

  // Add a function to toggle the expanded state
  const toggleInputExpand = () => {
    setIsInputExpanded(!isInputExpanded);
  };

  useEffect(() => {
    const fetchMessages = async (projectId: string) => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/chat/history/${projectId}`
        );
        // @ts-expect-error ignore
        const messages = response.data.messages.map((msg) => ({
          ...msg,
          content: msg.role === 'model' ? JSON.parse(msg.content) : msg.content,
        }));
        setmessage(messages);
      } catch (error) {
        console.error('Error fetching messages:', error);
        toast.error('Failed to load chat messages');
      } finally {
        setLoading(false);
      }
    };

    if (activeProject) {
      fetchMessages(activeProject?.projectId);
      fetchProjectFiles(activeProject?.projectId);
    } else {
      setmessage([]);
      setFiles({});
    }
    console.log('Active project changed in Chatview:', activeProject);
  }, [activeProject]);

  if (!activeProject.projectId) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground p-4 text-center">
        <p>Select a project to start chatting</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-white text-black">
    <CustomStyles />
    <div className="flex-1 overflow-y-auto min-h-0">
      <div className="h-full p-4 space-y-4">
        {loading ? (
          <div className="flex items-center justify-center h-full text-gray-500">
            <Loader2Icon className="animate-spin mr-2" size={20} />
            <p>Loading messages...</p>
          </div>
        ) : message && Array.isArray(message) && message.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-500">
            <p>No messages yet. Start a conversation!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {Array.isArray(message) &&
              message.map((msg, index) => (
                <div
                  // @ts-expect-error ignore
                  key={msg.id || index}
                  className={`flex ${
                    // @ts-expect-error ignore
                    msg.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[75%] p-3 rounded-lg break-words ${
                      // @ts-expect-error ignore
                      msg.role === 'user'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-black'
                    }`}
                  >
                    {/*@ts-expect-error ignore */}
                    {msg.isLoading ? (
                      <div className="flex items-center justify-center">
                        <Loader2Icon
                          className="animate-spin text-gray-500"
                          size={18}
                        />
                      </div>
                    ) : (
                      <Markdown>{renderMessageContent(msg)}</Markdown>
                    )}
                  </div>
                </div>
              ))}
  
            {failedMessage && (
              <div className="flex items-center justify-center mt-2">
                <button
                  onClick={handleRetry}
                  disabled={isRetrying}
                  className="flex items-center gap-2 bg-red-100 hover:bg-red-200 text-red-600 py-1.5 px-3 rounded-md text-sm font-medium transition-colors"
                >
                  {isRetrying ? (
                    <Loader2Icon className="animate-spin" size={14} />
                  ) : (
                    <RefreshCw size={14} />
                  )}
                  Try again
                </button>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
    </div>
    <div className="shrink-0 bg-white border-t border-gray-200 p-4">
      <div className="flex items-center gap-2 mb-2">
        {showLuaToggle && (
          <label className="flex items-center gap-1.5 cursor-pointer">
            <span className="text-xs font-medium text-gray-100">Lua</span>
            <div className="relative">
              <input
                type="checkbox"
                checked={luaEnabled}
                onChange={() => setLuaEnabled(!luaEnabled)}
                className="sr-only"
              />
              <div className="w-7 h-3 bg-gray-300 rounded-full shadow-inner transition-colors duration-200 ease-in-out" />
              <div
                className={`absolute top-[1px] left-[1px] w-2.5 h-2.5 rounded-full transition-all duration-200 ease-in-out ${
                  luaEnabled
                    ? 'translate-x-4 bg-[#39FF14] shadow-[0_0_6px_#39FF14]'
                    : 'translate-x-0 bg-gray-500 shadow-none'
                }`}
              />
            </div>
          </label>
        )}
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex gap-2 items-start">
          <select
            value={selectedFramework}
            onChange={(e) => setSelectedFramework(e.target.value)}
            className="bg-white border border-gray-300 rounded-md px-2 py-1 text-black h-[44px] shrink-0"
          >
            <option value="React">React</option>
            <option value="Nextjs">Nextjs</option>
            <option value="HTML">HTML</option>
          </select>
          <div className="flex-1 relative">
            <button
              type="button"
              onClick={toggleInputExpand}
              className="expand-button text-gray-600"
              aria-label={isInputExpanded ? 'Minimize input' : 'Maximize input'}
            >
              {isInputExpanded ? (
                <Minimize2 size={16} />
              ) : (
                <Maximize2 size={16} />
              )}
            </button>
  
            <Input
              value={userInput}
              onChange={(e) => setuserInput(e.target.value)}
              onKeyDown={handleKeyPress}
              disabled={loading}
              className="w-full text-black"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md disabled:opacity-50 h-[44px] flex items-center justify-center shrink-0"
            disabled={(!userInput.trim() && !failedMessage) || isRetrying}
          >
            {isRetrying ? (
              <Loader2Icon className="animate-spin" size={20} />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            )}
          </button>
        </div>
      </form>
    </div>
  </div>
  
  );
};

export default Chatview;
