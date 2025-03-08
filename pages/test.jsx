'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  anonSqliteProcess,
  fetchMessagesAR,
  messageAR,
  runLua,
  spawnProcess,
  transactionAR,
} from '@/lib/arkit';
import WalletConnect from '@/components/anon/WalletConnect';
import styles from '@/styles/test.module.css';
import { connect, createDataItemSigner } from '@permaweb/aoconnect/browser';
import axios from 'axios';

const fileData = [
  {
    file: 'data/file1.tsx',
    body: `import { clsx, type ClassValue } from "clsx";
          import { twMerge } from "tailwind-merge";
          export function cn(...inputs: ClassValue[]) {
          return twMerge(clsx(inputs));
}`,
  },
  {
    file: 'data/file2.tsx',
    body: `import2 { clsx2, type ClassValue } from "clsx2";
          import { twMerge } from "tailwind-merge";
          export function cn(...inputs: ClassValue[]) {
          return twMerge(clsx(inputs));
}`,
  },
];

const Testarweave = () => {
  const [process, setProcess] = useState(
    '8j7hprq4lWAOPLcBPwAYR7SwNeWRNfdk_MgRhs0u4hE'
  );
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [spawning, setSpawning] = useState(false);
  const [fetchedMessages, setFetchedMessages] = useState();

  const handleSendMessage = async ({ fileData }) => {
    try {
      setLoading(true);
      const process = localStorage.getItem('spawnedProcess');

      if (!process) {
        alert('No Process Found');
        return;
      }

      const messageId = await messageAR({
        process,
        data: JSON.stringify(fileData),
        tags: [
          {
            name: 'Action',
            value: 'ChatMessage',
          },
        ],
      });
      console.log('MessageId:', messageId);
      setMessage(messageId);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFetchMessages = async () => {
    try {
      const messages = await fetchMessagesAR({ process });
      // console.log('Fetched Messages:', messages);

      let parsedFiles = [];
      messages.forEach((message) => {
        const { data } = message;
        console.log('Message Data:', data);
        parsedFiles.push(data.map(({ file, body }) => ({ file, body })));
      });
      console.log(parsedFiles);
      setFetchedMessages(parsedFiles);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleTransaction = async () => {
    await transactionAR({
      data: '<html><head><meta charset="UTF-8"><title>Hello permanent world! This was signed via ArConnect!!!</title></head><body></body></html>',
    });
  };

  const handleSpawn = async () => {
    setSpawning(true);
    const storedProcess = localStorage.getItem('spawnedProcess');
    if (storedProcess) {
      console.warn('Process already spawned!');
      setProcess(storedProcess);
    } else {
      const process = await spawnProcess();
      setProcess(process);
      localStorage.setItem('spawnedProcess', process);
    }
    setSpawning(false);
  };

  useEffect(() => {
    const process = localStorage.getItem('spawnedProcess');
    setProcess(process);
  }, []);

  return (
    <div className="flex flex-col bg-[#0f0f0f] w-full min-h-screen">
      <div className="flex flex-col flex-1 min-h-screen text-white">
        <header className="border-[#333] bg-[#1a1a1a] px-4 py-8 border-b w-full">
          <div className="flex md:flex-row flex-col justify-between items-center gap-6 mx-auto px-4 w-full max-w-[1400px]">
            <div className="flex-1">
              <h1 className="mb-2 font-bold text-[clamp(1.5rem,4vw,2.5rem)] leading-tight">
                Arweave Test Console
              </h1>
              <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-400">
                Test and monitor your Arweave interactions
              </p>
            </div>
            <div className="flex justify-center w-full md:w-auto">
              <WalletConnect
                onWalletConnected={(walletData) => {
                  console.log('Wallet connected:', walletData);
                }}
              />
            </div>
          </div>
        </header>

        <main className="flex-1 bg-[#0f0f0f] p-4 md:p-8 w-full">
          <div className="mx-auto w-full max-w-[1400px]">
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-8">
              <Button
                onClick={handleSpawn}
                disabled={spawning}
                className="w-full h-12"
              >
                {spawning ? 'Spawning...' : 'Spawn Process'}
              </Button>

              <Button
                onClick={() => handleSendMessage({ fileData })}
                disabled={loading}
                className="w-full h-12"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>

              <Button
                onClick={async () => {
                  setLoading(true);
                  await runLua({
                    process: anonSqliteProcess,
                    code: `Handlers.add("getAuthor",{Action="getAuthor"},
                            function (msg)
                                local tables={}
                                local query = "SELECT * FROM Authors"
                                for row in db:nrows(query) do
                                    table.insert(tables,row)
                                end
                                msg.reply({Data=tables})
                            end
                          )`,
                    // code: `apm.install("@rakis/DbAdmin")`,
                  })
                    .then(console.log)
                    .catch(console.error);
                  setLoading(false);
                }}
                disabled={loading}
                className="w-full h-12"
              >
                {loading ? 'Calling...' : 'Call Eval'}
              </Button>
              <Button
                onClick={async () => {
                  const ao = connect();
                  const res = await ao
                    .message({
                      data: `
                    Send({Target="f_ZV6pI3KYkkHIctjTeEvUyBo8icRAwmDkHWWcvl3uY",Tags={Action="getAuthor"}})
                    `,
                      process: anonSqliteProcess,
                      signer: createDataItemSigner(globalThis.arweaveWallet),
                      tags: [{ name: 'Action', value: 'Eval' }],
                    })
                    .then(
                      async (res) =>
                        await axios.get(`https://arweave.net/${res}`)
                    );
                  console.log(res?.data);
                }}
              >
                Run Eval using luacode
              </Button>
              <Button
                onClick={async () => {
                  const ao = connect();
                  const res = await ao.dryrun({
                    data: '',
                    process: anonSqliteProcess,
                    tags: [{ name: 'Action', value: 'getAuthor' }],
                  });
                  console.log(res.Messages[0].Data);
                }}
              >
                Run Eval using dryrun
              </Button>

              <Button
                onClick={handleFetchMessages}
                disabled={fetching}
                className="w-full h-12"
              >
                {fetching ? 'Fetching...' : 'Fetch Messages'}
              </Button>
            </div>

            <div className="space-y-6 mb-8">
              {process && (
                <div className="border-[#333] bg-[#1a1a1a] p-6 border rounded-lg">
                  <h2 className="mb-4 font-semibold text-[clamp(1.25rem,3vw,1.5rem)]">
                    Active Process
                  </h2>
                  <code className="block bg-[#2a2a2a] p-4 rounded-lg font-mono text-[clamp(0.75rem,1.5vw,0.875rem)] break-all">
                    {process}
                  </code>
                </div>
              )}

              {message && (
                <div className="border-[#333] bg-[#1a1a1a] p-6 border rounded-lg">
                  <h2 className="mb-4 font-semibold text-[clamp(1.25rem,3vw,1.5rem)]">
                    Latest Message ID
                  </h2>
                  <code className="block bg-[#2a2a2a] p-4 rounded-lg font-mono text-[clamp(0.75rem,1.5vw,0.875rem)] break-all">
                    {message}
                  </code>
                </div>
              )}
            </div>

            {fetchedMessages && (
              <section className="mt-8">
                <h2 className="mb-6 font-semibold text-[clamp(1.25rem,3vw,1.5rem)]">
                  Fetched Messages
                </h2>
                <div className="gap-6 grid">
                  {fetchedMessages.map((fileGroup, index) => (
                    <div
                      key={index}
                      className="border-[#333] bg-[#1a1a1a] p-6 border rounded-lg transition-transform hover:-translate-y-0.5 duration-200"
                    >
                      {fileGroup.map(({ file, body }, idx) => (
                        <div
                          key={idx}
                          className={`${idx !== fileGroup.length - 1 ? 'mb-6' : ''}`}
                        >
                          <h3 className="mb-2 font-semibold text-base text-gray-400">
                            {file}
                          </h3>
                          <pre className={styles.codeBlock}>
                            <code>{body}</code>
                          </pre>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Testarweave;
