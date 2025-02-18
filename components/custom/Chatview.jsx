'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import Markdown from 'react-markdown';
import { Loader2Icon, Code, X } from 'lucide-react';
import Codeview from './Codeview';

const Chatview = ({ activeProject }) => {
  const [userInput, setuserInput] = useState('');
  const [message, setmessage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isCodeViewOpen, setIsCodeViewOpen] = useState(false);

  useEffect(() => {
    if (activeProject?.id) {
      loadChatHistory();
    } else {
      setmessage([]);
    }
  }, [activeProject]);

  const loadChatHistory = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/chat/${activeProject.id}`);
      if (response.data?.messages) {
        setmessage(response.data.messages);
      }
    } catch (error) {
      console.error('Error loading chat history:', error);
      toast.error('Failed to load chat history');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userInput.trim()) {
      toast.error("Please enter a message");
      return;
    }

    if (!activeProject?.id) {
      toast.error("Please select a project first");
      return;
    }

    const newMessage = {
      role: 'user',
      content: userInput,
    };

    setLoading(true);
    setError(null);

    try {
      setmessage([...message, newMessage]);
      setuserInput('');

      const response = await axios.post('http://localhost:5000/chat/getChat', {
        prompt: JSON.stringify([...message, newMessage]),
        projectId: activeProject.id
      });

      if (!response.data) {
        throw new Error('No response from server');
      }
      setmessage([...message, newMessage, { role: 'assistant', content: response?.data?.response }]);
    } catch (error) {
      console.error('Error in chat:', error);
      const errorMessage = error.response?.data?.message || error.message || 'An error occurred';
      setError(errorMessage);
      toast.error(errorMessage);

      setmessage([
        ...message,
        newMessage,
        {
          role: 'assistant',
          content: 'Sorry, there was an error: ' + errorMessage
        },
      ]);
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
    <div className="flex flex-col h-full max-h-screen bg-background relative">
      {/* Header with Code Toggle Button */}
      <div className="p-4 border-b flex justify-end">
        <button
          onClick={() => setIsCodeViewOpen(!isCodeViewOpen)}
          className={`px-4 py-2 rounded-md flex items-center gap-2 ${isCodeViewOpen ? 'bg-primary text-primary-foreground' : 'bg-secondary'
            }`}
        >
          {isCodeViewOpen ? <X size={16} /> : <Code size={16} />}
          {isCodeViewOpen ? 'Close Code' : 'View Code'}
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex relative">
        {/* Chat Section */}
        <div className={`flex-1 flex flex-col transition-all duration-300 ${isCodeViewOpen ? 'lg:w-1/2' : 'lg:w-full'
          }`}>
          {error && (
            <div className="bg-destructive/15 text-destructive px-4 py-2 rounded-md m-4">
              <p>{error}</p>
            </div>
          )}

          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-primary/10 scrollbar-track-transparent">
            {message.length === 0 ? (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                <p>No messages yet. Start a conversation!</p>
              </div>
            ) : (
              message.map((msg, index) => (
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
              ))
            )}

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
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t mt-auto">
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

        {/* Code View Section */}
        <div className={`fixed lg:static top-0 right-0 h-full bg-background border-l
          transform transition-all duration-300 ease-in-out
          ${isCodeViewOpen ? 'translate-x-0' : 'translate-x-full lg:w-0'}
          w-full lg:w-1/2
          z-20
        `}>
          <div className="h-full overflow-hidden">
            <Codeview activeProject={activeProject} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatview;
