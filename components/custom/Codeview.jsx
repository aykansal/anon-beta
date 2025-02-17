'use client';

import { MessageContext } from '@/context/MessagesContext';
import Extras from '@/data/Extras';
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackFileExplorer,
  Sandpack,
} from '@codesandbox/sandpack-react';
import axios from 'axios';
import { Loader2Icon } from 'lucide-react';
import { useContext, useEffect, useRef, useState } from 'react';
import SandPackPreviewClient from './SandPackPreviewClient';
import { Toaster } from '../ui/toaster';

const Codeview = () => {
  const [activeTab, setactiveTab] = useState('code');
  const [files, setfiles] = useState(Extras.DEFAULT_FILE);
  const [loading, setloading] = useState(false);

  const context = useContext(MessageContext);
  const { message } = context;
  const lastCalledRef = useRef(0);
  const GetCode = async () => {
    setloading(true);

    const latestPrompt = message[message.length - 1];
    // instead of sendng same context here with every msg req, it will be stored in the history of the model from ther server to reduce token cost and improve latency.
    // message[message.length - 1].content + ' ' + CODE_GEN_PROMPT;

    try {
      const aiResp = await axios
        .post(`${process.env.NEXT_PUBLIC_BASE_URL}/code/genCode`, {
          prompt: latestPrompt,
        })
        .then((response) => response.data.response);

      const mergedFile = { ...Extras.DEFAULT_FILE, ...aiResp?.files };
      setfiles(mergedFile);
      setloading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (message?.length > 0) {
      console.log('Generating code again');
      const role = message[message.length - 1].role;
      console.log(role);

      if (role === 'user') {
        const now = Date.now();
        if (now - lastCalledRef.current >= 10000) {
          lastCalledRef.current = now; // Update the timestamp
          GetCode();
        } else {
          console.log('Rate limiter active, skipping GetCode call.');
        }
      }
    }
  }, [message]);

  return (
    <div className="relative">
      <div className="bg-[#181818] p-2 border rounded-t-xl w-full">
        <div className="flex flex-wrap justify-center items-center gap-1 bg-black p-1 rounded-full w-[140px] shrink-0">
          <h1
            onClick={() => setactiveTab('code')}
            className={`cursor-pointer text-sm ${activeTab == 'code' && 'text-blue-500 bg-blue-500/30 '} px-2 py-1  rounded-full`}
          >
            code
          </h1>
          <h1
            onClick={() => setactiveTab('preview')}
            className={`cursor-pointer text-sm ${activeTab == 'preview' && 'text-blue-500 bg-blue-500/30 '} px-2 py-1  rounded-full`}
          >
            preview
          </h1>
        </div>
      </div>
      <SandpackProvider
        className="relative rounded-3xl"
        files={files}
        customSetup={{
          dependencies: {
            ...Extras.DEPENDANCY,
          },
          main: '/pages/index.tsx',
        }}
        options={{
          externalResources: ['https://cdn.tailwindcss.com'],
        }}
        template="vite-react-ts"
        theme={'dark'}
      >
        <SandpackLayout>
          {activeTab == 'code' ? (
            <>
              <SandpackFileExplorer style={{ height: '78vh' }} />
              <SandpackCodeEditor style={{ height: '78vh' }} />
            </>
          ) : (
            <>
              <SandPackPreviewClient />
            </>
          )}
        </SandpackLayout>
      </SandpackProvider>
      {loading && (
        <div className="top-0 absolute flex justify-center items-center bg-gray-800 opacity-80 rounded-xl w-full h-full">
          <div className="flex items-center gap-2">
            <Loader2Icon className="animate-spin" />
            <h2>Generating files....</h2>
          </div>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default Codeview;
