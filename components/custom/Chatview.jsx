'use client';

import axios from 'axios';
import { toast } from 'sonner';
import Markdown from 'react-markdown';
import { useState, useEffect, useRef } from 'react';
import { MentionsInput, Mention } from 'react-mentions';
import { FileInput, FolderInput, Loader2Icon } from 'lucide-react';

const getFolderStructure = (files) => {
  const structure = {};

  // Convert array to object with filePaths
  const fileMap = {};
  Object.entries(files).forEach(([_, file]) => {
    if (file && file.filePath) {
      fileMap[file.filePath] = file.code;
    }
  });

  // Now process the file paths
  Object.keys(fileMap).forEach((filePath) => {
    const parts = filePath.split('/').filter(Boolean);
    let current = structure;

    parts.forEach((part, index) => {
      if (index === parts.length - 1) {
        // It's a file
        if (!current._files) current._files = [];
        current._files.push({
          name: part,
          fullPath: filePath,
          code: fileMap[filePath],
        });
      } else {
        // It's a directory
        if (!current[part]) current[part] = {};
        current = current[part];
      }
    });
  });

  return structure;
};

const flattenFileStructure = (structure, prefix = '') => {
  let suggestions = [];

  // Add folders first
  Object.keys(structure).forEach((key) => {
    if (key !== '_files') {
      suggestions.push({
        id: `${prefix}${key}/`,
        display: `${prefix}${key}/`,
        isFolder: true,
      });

      // Add nested items
      suggestions = suggestions.concat(
        flattenFileStructure(structure[key], `${prefix}${key}/`)
      );
    }
  });

  // Add files
  if (structure._files) {
    structure._files.forEach((file) => {
      suggestions.push({
        id: file.fullPath,
        display: file.fullPath,
        isFile: true,
      });
    });
  }

  return suggestions;
};

const mentionsInputStyle = {
  input: {
    width: '100%',
    height: '44px',
    padding: '9px 12px',
    border: '1px solid hsl(var(--border))',
    borderRadius: '6px',
    fontSize: '14px',
    backgroundColor: 'hsl(var(--background))',
    color: 'hsl(var(--foreground))',
    transition: 'all 150ms',
    '&:focus': {
      outline: 'none',
      borderColor: 'hsl(var(--border))',
      boxShadow: '0 0 0 1px hsl(var(--border) / 0.2)',
    },
    '&::placeholder': {
      color: 'hsl(var(--muted-foreground))',
    },
  },
  suggestions: {
    list: {
      backgroundColor: 'hsl(var(--background))',
      border: '1px solid hsl(var(--border))',
      borderRadius: '6px',
      fontSize: '13px',
      maxHeight: '300px',
      minWidth: '300px',
      overflow: 'auto',
      position: 'absolute',
      bottom: '100%',
      left: 0,
      right: 0,
      marginBottom: '8px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      zIndex: 50,
    },
    item: {
      padding: '6px 10px',
      borderBottom: '1px solid hsl(var(--border))',
      color: 'hsl(var(--muted-foreground))',
      cursor: 'pointer',
      transition: 'all 150ms',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontSize: '12px',
      position: 'relative',
      '&.folder': {
        fontWeight: '500',
        color: 'hsl(var(--foreground))',
        backgroundColor: 'hsl(var(--secondary) / 0.3)',
        '&:before': {
          content: <FolderInput />,
          fontSize: '14px',
        },
      },
      '&.file': {
        paddingLeft: '24px',
        '&:before': {
          content: <FileInput />,
          fontSize: '14px',
          opacity: 0.5,
        },
      },
      '&:hover': {
        backgroundColor: 'hsl(var(--secondary))',
        color: 'hsl(var(--foreground))',
      },
      '&focused': {
        backgroundColor: 'hsl(var(--secondary))',
        color: 'hsl(var(--foreground))',
      },
      '&:last-child': {
        borderBottom: 'none',
      },
    },
  },
};

const Chatview = ({
  activeProject,
  onGenerateStart,
  onGenerateEnd,
  showLuaToggle = true,
}) => {
  const [userInput, setuserInput] = useState('');
  const [message, setmessage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState({});
  const [mentionedFiles, setMentionedFiles] = useState([]);
  const messagesEndRef = useRef(null);
  const [selectedFramework, setSelectedFramework] = useState('React');
  const [luaEnabled, setLuaEnabled] = useState(false);
  const [expandedFolders, setExpandedFolders] = useState(new Set());

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [message, loading]);

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
      if (error.response.data.erro === 'No code found for project') {
        toast.error('No code found for project');
        return;
      }
      console.error('Error fetching project files:', error);
    }
  };

  const getFileSuggestions = (search) => {
    if (!files || !Array.isArray(files)) return [];

    // Convert array to object with filePaths
    const fileMap = {};
    Object.entries(files).forEach(([_, file]) => {
      if (file && file.filePath) {
        fileMap[file.filePath] = file.code;
      }
    });

    // If it's just @ without search, show folder structure
    if (!search) {
      const structure = getFolderStructure(files);
      const suggestions = flattenFileStructure(structure);
      // Only show files from expanded folders
      return suggestions.filter((suggestion) => {
        if (suggestion.isFile) {
          // Check if parent folder is expanded
          const folderPath =
            suggestion.id.split('/').slice(0, -1).join('/') + '/';
          return expandedFolders.has(folderPath);
        }
        return true; // Always show folders
      });
    }

    // If there's a search term, search across all files
    const searchLower = search.toLowerCase();
    return Object.entries(files)
      .filter(
        ([_, file]) =>
          file &&
          file.filePath &&
          file.filePath.toLowerCase().includes(searchLower)
      )
      .map(([_, file]) => ({
        id: file.filePath,
        display: file.filePath,
        isFile: true,
      }));
  };

  const handleFileMention = (id, display) => {
    // Find the file in the array
    const mentionedFile = Object.values(files).find(
      (file) => file.filePath === id
    );
    if (mentionedFile) {
      setMentionedFiles((prev) => [
        ...prev,
        {
          id,
          display,
          code: mentionedFile.code,
        },
      ]);
    }
  };

  const handleFolderClick = (folderId) => {
    setExpandedFolders((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(folderId)) {
        newSet.delete(folderId);
      } else {
        newSet.add(folderId);
      }
      return newSet;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim() || loading || !activeProject?.projectId) return;

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

      const requestBody = {
        prompt: newMessage,
        projectId: activeProject.projectId,
        fileContext,
        framework: selectedFramework,
        luaEnabled,
      };

      const response = await axios.post(
        `${process.env.BACKEND_URL}/chat/`,
        requestBody
      );

      if (response.data?.content) {
        setmessage((prev) => [
          ...prev,
          {
            role: response?.data?.role,
            content: response?.data?.content,
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

    const content = msg.content;
    let markdownContent = '';

    if (content.description) {
      markdownContent += content.description + '\n\n';
    }

    return markdownContent;
  };

  if (!activeProject.projectId) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground p-4 text-center">
        <p>Select a project to start chatting</p>
      </div>
    );
  }

  useEffect(() => {
    if (activeProject) {
      fetchMessages(activeProject?.projectId);
      fetchProjectFiles(activeProject?.projectId);
    } else {
      setmessage([]);
      setFiles({});
    }
    console.log('Active project changed in Chatview:', activeProject);
  }, [activeProject]);

  return (
    <div className="h-full flex flex-col bg-background">
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
      <div className="shrink-0 bg-background p-4">
        <div className="flex items-center gap-2 mb-2">
          {showLuaToggle && (
            <label className="flex items-center gap-1.5 cursor-pointer">
              <span className="text-xs font-medium text-gray-200">Lua</span>
              <div className="relative">
                <input
                  type="checkbox"
                  checked={luaEnabled}
                  onChange={() => setLuaEnabled(!luaEnabled)}
                  className="sr-only"
                />
                <div className="w-7 h-3 bg-gray-800 rounded-full shadow-inner transition-colors duration-200 ease-in-out" />
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
        <form onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <select
              value={selectedFramework}
              onChange={(e) => setSelectedFramework(e.target.value)}
              className="bg-background border border-border rounded-md px-2 py-1"
            >
              <option value="React">React</option>
              <option value="Nextjs">Nextjs</option>
              <option value="HTML">HTML</option>
            </select>
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
                  renderSuggestion={(suggestion) => (
                    <div
                      className={`suggestion-item ${suggestion.isFolder ? 'folder' : 'file'}`}
                      onClick={() =>
                        suggestion.isFolder && handleFolderClick(suggestion.id)
                      }
                    >
                      {suggestion.isFolder ? (
                        <div className="flex items-center gap-2">
                          <FolderInput className="w-4 h-4" />{' '}
                          {suggestion.display}
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <FileInput className="w-4 h-4" /> {suggestion.display}
                        </div>
                      )}
                    </div>
                  )}
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
