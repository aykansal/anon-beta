'use client';

import axios from 'axios';
import Markdown from 'react-markdown';
import { Loader2Icon } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { MentionsInput, Mention } from 'react-mentions';
import { toast } from 'sonner';

// Custom styling for react-mentions
const mentionsInputStyle = {
  input: {
    width: '100%',
    height: '44px',
    padding: '9px 12px',
    border: '1px solid #e2e8f0',
    borderRadius: '6px',
    fontSize: '14px',
    backgroundColor: 'transparent',
    color: 'inherit',
  },
  suggestions: {
    list: {
      backgroundColor: 'var(--background)',
      border: '1px solid var(--border)',
      borderRadius: '6px',
      fontSize: '14px',
      maxHeight: '200px',
      overflow: 'auto',
      position: 'absolute',
      bottom: '100%',
      left: 0,
      right: 0,
      marginBottom: '8px',
    },
    item: {
      padding: '8px 12px',
      borderBottom: '1px solid var(--border)',
      color: 'var(--foreground)',
      '&focused': {
        backgroundColor: 'var(--accent)',
      },
    },
  },
};

const Chatview = ({ activeProject, onGenerateStart, onGenerateEnd }) => {
  const [userInput, setuserInput] = useState('');
  const [message, setmessage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [files, setFiles] = useState({});
  const [mentionedFiles, setMentionedFiles] = useState([]);
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
      fetchProjectFiles(activeProject.id);
    } else {
      setmessage([]);
      setFiles({});
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

  const fetchProjectFiles = async (projectId) => {
    try {
      const response = await axios.get(
        `${process.env.BACKEND_URL}/projects/${projectId}`
      );
      if (response.data?.codebase) {
        setFiles(response.data.codebase);
      }
    } catch (error) {
      console.error('Error fetching project files:', error);
    }
  };

  // Function to get file suggestions for mentions
  const getFileSuggestions = (search) => {
    const fileList = Object.keys(files);
    return fileList
      .filter((filename) =>
        filename.toLowerCase().includes(search.toLowerCase())
      )
      .map((filename) => ({
        id: filename,
        display: filename,
      }));
  };

  // Handle file mention
  const handleFileMention = (id, display) => {
    setMentionedFiles((prev) => [...prev, { id, display }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim() || loading || !activeProject?.id) return;

    // Create file context from mentioned files
    const fileContext = mentionedFiles.reduce((acc, file) => {
      if (files[file.id]) {
        acc[file.id] = files[file.id];
      }
      return acc;
    }, {});

    const newMessage = {
      role: 'user',
      content: userInput?.trim(),
    };

    setuserInput('');
    setMentionedFiles([]);

    try {
      setLoading(true);
      onGenerateStart?.();
      setmessage((prev) => [...prev, newMessage]);

      // Simplified request body with only fileContext
      const requestBody = {
        prompt: newMessage,
        projectId: activeProject.id,
        fileContext,
      };

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
      toast.error('Failed to send message');
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
      {/* Modified Chat Input */}
      <div className="shrink-0 bg-background p-4">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <MentionsInput
                value={userInput}
                onChange={(e) => setuserInput(e.target.value)}
                style={mentionsInputStyle}
                placeholder="Use @ to mention files"
                disabled={loading}
              >
                <Mention
                  trigger="@"
                  data={getFileSuggestions}
                  onAdd={handleFileMention}
                  appendSpaceOnAdd
                  displayTransform={(id) => `@${id}`}
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: 'var(--primary-foreground)',
                    padding: '0 4px',
                    borderRadius: '3px',
                  }}
                />
              </MentionsInput>
            </div>
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md disabled:opacity-50"
              disabled={loading}
            >
              {loading ? <Loader2Icon className="animate-spin" /> : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chatview;
