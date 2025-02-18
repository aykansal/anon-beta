'use client';

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import Markdown from 'react-markdown';
import { Loader2Icon, Code, X } from 'lucide-react';
import Codeview from './Codeview';
import Extras from '@/data/Extras';

const Chatview = ({ activeProject }) => {
  const [userInput, setuserInput] = useState('');
  const [message, setmessage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isCodeViewOpen, setIsCodeViewOpen] = useState(false);
  const [files, setFiles] = useState(Extras.DEFAULT_FILE);
  const [isSavingCode, setIsSavingCode] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [message, loading]);

  // Debug effect for activeProject changes
  useEffect(() => {
    console.log('Active project changed in Chatview:', activeProject);
    if (activeProject?.id) {
      fetchMessages(activeProject.id);
    } else {
      setmessage([]);
    }
  }, [activeProject]);

  const fetchMessages = async (projectId) => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/chat/${projectId}`);
      console.log('Fetched messages:', response.data);
      setmessage(response.data.messages || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
      setError('Failed to load chat messages');
    } finally {
      setLoading(false);
    }
  };

  const loadProjectCode = async () => {
    try {
      setError(null);
      setLoading(true);

      if (!activeProject?.id) {
        throw new Error('Project ID is required to load code');
      }

      const response = await axios.get(`http://localhost:5000/projects/code?activeProjectId=${activeProject.id}`);

      if (!response.data) {
        throw new Error('No data received from server');
      }

      if (response.data?.files) {
        setFiles(response.data.files);
      } else {
        setFiles(Extras.DEFAULT_FILE);
      }
    } catch (error) {
      console.error('Error loading project code:', error);
      const errorMessage = error.response?.data?.message || error.message || 'Failed to load project code';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveCode = async (updatedFiles) => {
    try {
      setIsSavingCode(true);
      setError(null);

      if (!activeProject?.id) {
        throw new Error('Project ID is required to save code');
      }

      await axios.post(`http://localhost:5000/projects/${activeProject.id}/code`, {
        files: updatedFiles,
        sandboxId: Date.now().toString()
      });

      setFiles(updatedFiles);
      toast.success('Code saved successfully');
    } catch (error) {
      console.error('Error saving code:', error);
      const errorMessage = error.response?.data?.message || error.message || 'Failed to save code';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsSavingCode(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim() || loading || !activeProject?.id) return;

    const newMessage = userInput.trim();
    setuserInput('');

    try {
      setLoading(true);
      setmessage(prev => [...prev, { role: 'user', content: newMessage }]);
      
      console.log('Sending chat message for project:', activeProject.id);
      const response = await axios.post('http://localhost:5000/chat/getChat', {
        prompt: newMessage,
        projectId: activeProject.id
      });

      if (response.data.message) {
        setmessage(prev => [...prev, { role: 'assistant', content: response.data.message }]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Failed to send message');
    } finally {
      setLoading(false);
    }
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
      {error && (
        <div className="shrink-0 bg-destructive/15 text-destructive px-4 py-2 m-4">
          <p>{error}</p>
        </div>
      )}

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto min-h-0">
        <div className="h-full p-4 space-y-4">
          {message.length === 0 ? (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              <p>No messages yet. Start a conversation!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {message.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[75%] p-3 rounded-lg break-words ${msg.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                      }`}
                  >
                    <Markdown className="prose prose-sm dark:prose-invert max-w-none">
                      {msg.content}
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
      <div className="shrink-0 border-t bg-background p-4">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setuserInput(e.target.value)}
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chatview;
