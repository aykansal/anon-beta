'use client';

import axios from 'axios';
import Markdown from 'react-markdown';
import { Loader2Icon } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import ExtrasCopy from '@/data/Extras copy';
import { toast } from 'sonner';

const Chatview = ({ activeProject, onGenerateStart, onGenerateEnd }) => {
  const [userInput, setuserInput] = useState('');
  const [message, setmessage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [, setFiles] = useState(ExtrasCopy.DEFAULT_FILE);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [message, loading]);

  useEffect(() => {
    if (activeProject?.id) {
      fetchMessages(activeProject.id);
    } else {
      setmessage([]);
      setFiles(Extras.DEFAULT_FILE);
    }
    console.log('Active project changed in Chatview:', activeProject);
  }, [activeProject]);

  const fetchMessages = async (projectId) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.BACKEND_URL}/chat/history/${projectId}`
      );

      const messages = response.data.messages.map((msg) => ({
        ...msg,
        content: msg.role === 'model' ? JSON.parse(msg.content) : msg.content,
      }));
      setmessage(messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
      toast.error('Failed to load chat messages', {
        action: {
          label: 'Resend',
          onClick: () => fetchMessages(),
        },
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim() || loading || !activeProject?.id) return;

    const newMessage = { role: 'user', content: userInput?.trim() };
    setuserInput('');

    try {
      setLoading(true);
      onGenerateStart?.();
      setmessage((prev) => [...prev, newMessage]);

      // Create request body
      const requestBody = {
        prompt: newMessage,
        projectId: activeProject.id,
      };

      // Include current project files, not just for first message
      // This ensures the AI always has the latest file versions
      const currentProjectFiles = {};

      // Dispatch event to request current files from Codeview
      window.dispatchEvent(new CustomEvent('requestCurrentFiles'));

      // Set up listener for the response
      const filesHandler = (event) => {
        Object.assign(currentProjectFiles, event.detail);
        window.removeEventListener('getCurrentFiles', filesHandler);
      };

      window.addEventListener('getCurrentFiles', filesHandler);

      // Wait a brief moment for the event to complete
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Add the current project files to the request
      if (Object.keys(currentProjectFiles).length > 0) {
        requestBody.templateFiles = currentProjectFiles;
      }

      const response = await axios.post(
        `${process.env.BACKEND_URL}/chat/`,
        requestBody
      );

      if (response.data?.content) {
        setmessage((prev) => [
          ...prev,
          {
            role: response.data.role,
            content: response.data.content,
          },
        ]);

        if (response.data.content.codebase) {
          const formattedFiles = {};
          response.data.content.codebase.forEach((file) => {
            formattedFiles[file.filePath] = {
              code: file.code,
              hidden: false,
              active: true,
            };
          });

          window.dispatchEvent(
            new CustomEvent('codebaseUpdate', {
              detail: formattedFiles,
            })
          );
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message', {
        action: {
          label: 'Resend',
          onClick: () => handleSubmit(),
        },
      });
    } finally {
      setLoading(false);
      onGenerateEnd?.();
    }
  };

  const renderMessageContent = (msg) => {
    if (msg.role === 'user') {
      return msg.content;
    }

    // For model responses, format the content
    const content = msg.content;
    let markdownContent = '';

    if (content.description) {
      markdownContent += content.description + '\n\n';
    }

    // if (content.codeInstructions && Array.isArray(content.codeInstructions)) {
    //   markdownContent += content.codeInstructions
    //     .map((instruction, index) => `${index + 1}. ${instruction}`)
    //     .join('\n');
    // }

    return markdownContent;
  };

  if (!activeProject?.id) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground p-4 text-center">
        <p>Select a project to start chatting</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-background">
      {/* {error && (
        <div className="shrink-0 bg-destructive/15 text-destructive px-4 py-2 m-4 flex justify-between items-center">
          <p>{error}</p>
          <button
            onClick={() => handleSubmit({ preventDefault: () => {} })}
            className="text-sm underline hover:text-destructive-dark"
          >
            Retry
          </button>
        </div>
      )} */}
      <div className="flex-1 overflow-y-auto min-h-0">
        <div className="h-full p-4 space-y-4">
          {message && Array.isArray(message) && message.length === 0 ? (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              <p>No messages yet. Start a conversation!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {Array.isArray(message) &&
                message.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] sm:max-w-[75%] p-3 rounded-lg break-words ${
                        msg.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      <Markdown className="prose prose-sm dark:prose-invert max-w-none">
                        {renderMessageContent(msg)}
                      </Markdown>
                    </div>
                  </div>
                ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] sm:max-w-[75%] p-3 rounded-lg bg-muted animate-pulse">
                    <div className="flex items-center space-x-2">
                      <Loader2Icon className="animate-spin" />
                      <span>Thinking...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </div>
      {/* Chat Input */}
      <div className="shrink-0 bg-background p-4">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => {
                setuserInput(e.target.value);
                // if (e.target.value.length > 450)
                //   toast.warning('Approaching 500-character limit!');
              }}
              // maxLength={500}
              placeholder="Type your message..."
              className="flex-1 bg-background border rounded-md px-4 py-2"
              disabled={loading}
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md disabled:opacity-50"
              disabled={loading}
            >
              {loading ? <Loader2Icon className="animate-spin" /> : 'Send'}
            </button>
            {loading && (
              <button
                onClick={() => setLoading(false)} // Add abort logic if possible
                className="bg-destructive text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chatview;
