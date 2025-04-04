import { DEPENDENCIES } from "./defaultFiles";


export const defaultFiles_1 = {
  '/index.html': `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
  `.trim(),
  '/src/main.tsx': `
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
  `.trim(),
  '/src/App.tsx': `
import React from 'react';

export default function App() {
  return <h1>Hello, World!</h1>;
}
  `.trim(),
  '/src/lib/arweaveUtils.js': `
export const anonSqliteProcess = 'f_ZV6pI3KYkkHIctjTeEvUyBo8icRAwmDkHWWcvl3uY';
export const CommonTags = [
  { name: 'Name', value: 'Anon' },
  { name: 'Version', value: '0.2.1' },
  { name: 'Authority', value: 'fcoN_xJeisVsPXA-trzVAuIiqO3ydLQxM-L4XbrQKzY' },
];

import { spawn, createDataItemSigner, connect } from '@permaweb/aoconnect';
import axios from 'axios';
import Arweave from 'arweave';

export const arweave = Arweave.init({
  host: 'ar-io.net',
  port: 443,
  protocol: 'https',
});

export async function fetchGraphQL({ query, variables }) {
  const endpoint = 'https://arweave-search.goldsky.com/graphql';
  try {
    const response = await axios.post(endpoint, { query, variables });
    return response.data;
  } catch (err) {
    console.error('Error fetching data:', err);
    throw err;
  }
}

export async function fetchMessagesAR({ process }) {
  try {
    baseData.variables.entityId = process;
    const messagesResponse = await fetchGraphQL({
      query: baseData.query,
      variables: baseData.variables,
    });

    const messages = messagesResponse.data.transactions.edges.map((m) => ({
      id: m.node.id,
      recipient: m.node.recipient,
      tags: m.node.tags,
      data: m.node.data,
      owner: m.node.owner.address,
      ingested_at: m.node.ingested_at,
    }));

    const detailedMessages = await Promise.all(
      messages.map(async (m) => {
        try {
          const res = await axios.get('https://arweave.net/' + m.id);
          return { ...m, data: res.data };
        } catch (error) {
          console.error('Error fetching message with ID ' + m.id + ':', error);
          return null;
        }
      })
    );
    return detailedMessages.filter((m) => m !== null);
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
}

export const AOModule = 'Do_Uc2Sju_ffp6Ev0AnLVdPtot15rvMjP-a9VVaA5fM';
export const AOScheduler = '_GQ33BkPtZrqxA84vM8Zk-N2aO0toNNu_C-l-rawrBA';

export async function spawnProcess(name, tags = []) {
  try {
    const allTags = [...CommonTags, ...tags];
    if (name) {
      allTags.push({ name: 'Name', value: name });
    }

    const processId = await spawn({
      module: AOModule,
      scheduler: AOScheduler,
      signer: createDataItemSigner(globalThis.arweaveWallet),
      tags: allTags,
    });

    return processId;
  } catch (error) {
    console.error('Error spawning process:', error);
    throw error;
  }
}

export async function messageAR({ tags = [], data = '', anchor = '', process }) {
  const ao = connect();
  try {
    if (!process) throw new Error('Process ID is required.');
    const allTags = [...CommonTags, ...tags];
    const messageId = await ao.message({
      data,
      anchor,
      process,
      tags: allTags,
      signer: createDataItemSigner(globalThis.arweaveWallet),
    });
    return messageId;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
}

export async function transactionAR({ data }) {
  await window.arweaveWallet.connect(['SIGN_TRANSACTION', 'DISPATCH']);
  const transaction = await arweave.createTransaction({ data });
  const uint8Array = new Uint8Array(transaction.data);
  const string = String.fromCharCode(...uint8Array);
  console.log(string);

  const signed = await window.arweaveWallet.dispatch(transaction);
  console.log(signed);
  return signed;
}

export async function runLua({ code, process, tags = [] }) {
  const ao = connect();
  const allTags = tags.length ? [...CommonTags, ...tags] : CommonTags;
  allTags.push({ name: 'Action', value: 'Eval' });

  const message = await ao.message({
    process,
    data: code,
    signer: createDataItemSigner(globalThis.arweaveWallet),
    tags: allTags,
  });

  const result = await ao.result({ process, message });
  result.id = message;
  return result;
}

export async function readHandler({ process, action, tags = [], data }) {
  const ao = connect();
  const baseTags = [{ name: 'Action', value: action }, ...tags];
  const newData = JSON.stringify(data || {});

  const response = await ao.dryRun({
    process,
    data: newData,
    tags: baseTags,
  });

  if (response.Messages && response.Messages.length) {
    if (response.Messages[0].Data) {
      return JSON.parse(response.Messages[0].Data);
    } else if (response.Messages[0].Tags) {
      return response.Messages[0].Tags.reduce((acc, item) => {
        acc[item.name] = item.value;
        return acc;
      }, {});
    }
  }
}

export async function useQuickWallet() {
  try {
    const data = await arweave.wallets.generate().then(async (key) => {
      const address = await arweave.wallets.jwkToAddress(key);
      return { key, address };
    });
    return data;
  } catch (error) {
    console.error('Error generating Arweave wallet:', error);
    throw error;
  }
}

export async function connectWallet() {
  try {
    if (!window.arweaveWallet) {
      alert('No Arconnect detected');
      return;
    }
    await window.arweaveWallet.connect(
      ['ACCESS_ADDRESS', 'SIGN_TRANSACTION', 'ACCESS_TOKENS'],
      {
        name: 'Anon',
        logo: 'https://arweave.net/jAvd7Z1CBd8gVF2D6ESj7SMCCUYxDX_z3vpp5aHdaYk',
      },
      {
        host: 'g8way.io',
        port: 443,
        protocol: 'https',
      }
    );
    console.log('connected');
    return 'connected wallet successfully';
  } catch (error) {
    console.error(error);
  } finally {
    console.log('connection finished execution');
  }
}

export async function disconnectWallet() {
  return await window.arweaveWallet.disconnect();
}

export async function getWalletDetails() {
  const walletAddress = await window.arweaveWallet.getActiveAddress();
  const tokens = await window.arweaveWallet.userTokens();
  const tokenId = tokens[0].processId;
  const balance = await window.arweaveWallet.tokenBalance(tokenId);
  return { walletAddress, balance };
}

export const baseData = {
  query: \`
    query ($entityId: String!, $limit: Int!, $sortOrder: SortOrder!, $cursor: String) {
      transactions(
        sort: $sortOrder
        first: $limit
        after: $cursor
        recipients: [$entityId]
        ingested_at: {min: 1696107600}
      ) {
        count
        ...MessageFields
        __typename
      }
    }
    fragment MessageFields on TransactionConnection {
      edges {
        cursor
        node {
          id
          ingested_at
          recipient
          block {
            timestamp
            height
            __typename
          }
          tags {
            name
            value
            __typename
          }
          data {
            size
            __typename
          }
          owner {
            address
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
  \`,
  variables: {
    cursor: '',
    entityId: '',
    limit: 25,
    sortOrder: 'INGESTED_AT_DESC',
  },
};
  `.trim(),
  '/package.json': JSON.stringify(
    {
      dependencies: DEPENDENCIES.dependencies,
      devDependencies: DEPENDENCIES.devDependencies,
      scripts: {
        dev: 'NEXT_TELEMETRY_DISABLED=1 next dev',
        build: 'next build',
        start: 'next start',
        lint: 'next lint',
      },
    },
    null,
    2
  ).trim(),
};