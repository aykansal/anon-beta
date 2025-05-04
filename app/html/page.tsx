'use client';
import axios from 'axios';
import { PlusIcon, Loader2, Maximize, Minimize } from 'lucide-react';
import React, { useState } from 'react';

const HTMLCODER = () => {
  const [previewHtml, setPreviewHtml] = useState<{
    code: string;
    response: string;
  }>({
    code: '',
    response: '',
  });
  const [promptValue, setPromptValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState<'code' | 'preview'>('preview');
  const [isPreviewMaximized, setIsPreviewMaximized] = useState(false);

  const handlePromptSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!promptValue.trim()) {
      setError('Please enter a prompt');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      console.log('Submitting prompt:', promptValue);

      const response = await axios.post<{ code: string; response: string }>(
        'http://localhost:5000/htmlcoder/generate',
        { prompt: promptValue }
      );
      const data = response.data;
      console.log('Response received:', data);

      // Get existing history or initialize empty array
      const existingHistory = localStorage.getItem('promptHistory');
      const historyArray = existingHistory ? JSON.parse(existingHistory) : [];

      // Add new prompt and response to history
      historyArray.push({
        prompt: promptValue,
        response: data,
        timestamp: new Date().toISOString(),
      });

      // Save updated history
      localStorage.setItem('promptHistory', JSON.stringify(historyArray));
      console.log('Updated prompt history:', historyArray);

      setPreviewHtml(data);
      setPromptValue('');
      setActiveTab('preview');
    } catch (err) {
      console.error('Error submitting prompt:', err);
      let errorMessage = 'Failed to generate HTML. Please try again.';
      if (axios.isAxiosError(err) && err.response?.data?.error) {
        errorMessage = err.response.data.error;
      }
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Base classes using CSS variables from globals.css
  const baseBg = 'bg-background';
  const baseText = 'text-foreground';
  const panelBg = 'bg-card'; // Use card for main panel areas
  const inputBg = 'bg-input'; // Use input for textarea, could also use secondary
  const buttonBg = 'bg-primary';
  const buttonText = 'text-primary-foreground';
  const buttonHoverBg = 'hover:bg-primary/90'; // Slightly transparent primary on hover
  const borderColor = 'border-border';
  const mutedText = 'text-muted-foreground';
  const errorText = 'text-destructive';
  const focusRing = 'focus:ring-ring';
  const focusRingOffset = 'focus:ring-offset-background'; // Offset matches the main background
  const activeTabBg = 'bg-secondary'; // Use secondary for active/selected state
  const inactiveTabBg = 'bg-card'; // Use card for inactive state
  const inactiveTabHoverBg = 'hover:bg-secondary';
  const codeBlockBg = 'bg-secondary'; // Secondary for code block background for contrast

  return (
    <div
      className={`flex flex-col md:flex-row h-screen max-h-screen ${baseBg} ${baseText} overflow-hidden`}
    >
      {/* Left Panel (Code/Preview Toggle Area) */}
      {/* Ensure this panel takes full height and allows content scroll */}
      <div
        className={`flex flex-col w-full md:w-1/2 lg:w-2/3 border-r ${borderColor} h-full ${
          isPreviewMaximized ? 'hidden' : 'flex'
        }`}
      >
        {/* Panel Tabs/Buttons */}
        <div className={`flex border-b ${borderColor} flex-shrink-0`}>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-4 py-2 ${
              activeTab === 'code' ? activeTabBg : inactiveTabBg
            } ${inactiveTabHoverBg} text-sm font-medium`}
          >
            Code
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-4 py-2 ${
              activeTab === 'preview' ? activeTabBg : inactiveTabBg
            } ${inactiveTabHoverBg} text-sm font-medium`}
          >
            Preview
          </button>
        </div>

        {/* Conditional Rendering based on view - takes remaining height */}
        <div className="flex-grow p-1 overflow-auto relative">
          {' '}
          {/* Added relative for potential absolute positioning inside */}
          {activeTab === 'code' && (
            // Added container for code view styling
            <div
              className={`${panelBg} rounded-lg shadow-md h-full p-4 overflow-auto`}
            >
              <h2 className={`text-lg font-semibold ${baseText} mb-4`}>
                Generated HTML
              </h2>
              {previewHtml.code ? (
                <pre
                  className={`text-sm ${codeBlockBg} p-3 rounded overflow-auto`}
                >
                  <code className="language-html whitespace-pre-wrap break-words">
                    {previewHtml.code}
                  </code>
                </pre>
              ) : (
                <div
                  className={`flex items-center justify-center h-full ${mutedText}`}
                >
                  Generate some HTML to see the code here.
                </div>
              )}
            </div>
          )}
          {activeTab === 'preview' && (
            // Use h-full for preview section to fill available space
            <section
              className={`${panelBg} rounded-lg shadow-md overflow-hidden h-full flex flex-col ${
                isPreviewMaximized
                  ? 'fixed inset-0 z-50 m-0 rounded-none border-none'
                  : 'relative'
              }`}
            >
              <div
                className={`p-2 border-b ${borderColor} flex justify-between items-center flex-shrink-0`}
              >
                {' '}
                {/* Reduced padding */}
                <h2 className={`text-base font-semibold ${baseText}`}>
                  Preview
                </h2>{' '}
                {/* Reduced font size */}
                <button
                  onClick={() => setIsPreviewMaximized(!isPreviewMaximized)}
                  className={`p-1 ${mutedText} hover:text-foreground`}
                  title={
                    isPreviewMaximized ? 'Minimize Preview' : 'Maximize Preview'
                  }
                >
                  {isPreviewMaximized ? (
                    <Minimize size={16} />
                  ) : (
                    <Maximize size={16} />
                  )}{' '}
                  {/* Reduced icon size */}
                </button>
              </div>
              {/* Iframe container takes remaining space */}
              <div className="p-2 flex-grow h-0">
                {' '}
                {/* Adjusted padding and added h-0 for flex-grow */}
                {previewHtml.code ? (
                  <iframe
                    srcDoc={previewHtml.code}
                    className={`w-full h-full border ${borderColor} rounded-md bg-white`}
                    title="Code Preview"
                  />
                ) : (
                  <div
                    className={`flex items-center justify-center h-full bg-secondary rounded-md`}
                  >
                    <p className={`${mutedText}`}>
                      Your HTML preview will appear here
                    </p>
                  </div>
                )}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Right Panel (Chat + Prompt Input) */}
      {/* Ensure this panel takes full height and allows content scroll */}
      <div
        className={`flex flex-col w-full md:w-1/2 lg:w-1/3 ${panelBg} h-full ${
          isPreviewMaximized ? 'hidden' : 'flex'
        }`}
      >
        {/* Chat Area (Grows to fill space) */}
        <div className="flex-grow p-4 overflow-y-auto">
          <h2
            className={`text-lg font-semibold ${baseText} border-b ${borderColor} pb-2 mb-4`}
          >
            Chat Area
          </h2>
          <div className={`${mutedText}`}>
            Chat functionality coming soon...
            {/* Placeholder content */}
            <div className="h-96"></div>
            <div className="h-96"></div>
          </div>
        </div>
        {/* Prompt Input Area (Fixed at bottom) */}
        <div className={`p-4 border-t ${borderColor} flex-shrink-0`}>
          <form onSubmit={handlePromptSubmit} className="space-y-3">
            <textarea
              value={promptValue}
              onChange={(e) => setPromptValue(e.target.value)}
              placeholder="Enter your prompt here..."
              className={`w-full h-24 p-3 ${inputBg} border ${borderColor} ${baseText} rounded-md focus:ring-2 ${focusRing} focus:border-input resize-none placeholder:text-muted-foreground text-sm`}
              rows={3} // Suggest smaller height
            />
            {error && <p className={`text-sm ${errorText}`}>{error}</p>}
            <button
              type="submit"
              disabled={isLoading}
              className={`flex items-center justify-center w-full px-4 py-2 ${buttonBg} ${buttonText} rounded-md ${buttonHoverBg} focus:outline-none focus:ring-2 ${focusRing} ${focusRingOffset} disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  Generate HTML
                  <PlusIcon className="w-4 h-4 ml-2" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Maximized Preview Overlay (if active) */}
      {isPreviewMaximized && activeTab === 'preview' && (
        <section
          className={`${panelBg} fixed inset-0 z-50 m-0 rounded-none border-none flex flex-col`}
        >
          <div
            className={`p-2 border-b ${borderColor} flex justify-between items-center flex-shrink-0`}
          >
            {' '}
            {/* Reduced padding */}
            <h2 className={`text-base font-semibold ${baseText}`}>
              Preview (Maximized)
            </h2>{' '}
            {/* Reduced font size */}
            <button
              onClick={() => setIsPreviewMaximized(false)}
              className={`p-1 ${mutedText} hover:text-foreground`}
              title={'Minimize Preview'}
            >
              <Minimize size={16} /> {/* Reduced icon size */}
            </button>
          </div>
          {/* Iframe container takes remaining space */}
          <div className="p-2 flex-grow h-0">
            {' '}
            {/* Adjusted padding and added h-0 for flex-grow */}
            <iframe
              srcDoc={previewHtml.code}
              className={`w-full h-full border ${borderColor} rounded-md bg-white`}
              title="Code Preview"
            />
          </div>
        </section>
      )}
    </div>
  );
};

export default HTMLCODER;
