import axios from 'axios';
import Arweave from 'arweave';
import { connect, createDataItemSigner } from '@permaweb/aoconnect';

export const GATEWAY_URL = 'https://arnode.asia';
export const GRAPHQL_URL = 'https://arnode.asia/graphql';

export const CommonTags = [
  { name: 'Name', value: 'Anon' },
  { name: 'Version', value: '0.2.1' },
  { name: 'Authority', value: 'fcoN_xJeisVsPXA-trzVAuIiqO3ydLQxM-L4XbrQKzY' },
];

export const AOModule = 'Do_Uc2Sju_ffp6Ev0AnLVdPtot15rvMjP-a9VVaA5fM';
export const AOScheduler = '_GQ33BkPtZrqxA84vM8Zk-N2aO0toNNu_C-l-rawrBA';

const baseData = {
  query: `
    query ($entityId: String!, $limit: Int!, $sortOrder: SortOrder!, $cursor: String) {
      transactions(
        sort: $sortOrder
        first: $limit
        after: $cursor
        recipients: [$entityId]
        ingested_at: {min: 1696107600}
      ) {
        count
        edges {
          cursor
          node {
            id
            ingested_at
            recipient
            block {
              timestamp
              height
            }
            tags {
              name
              value
            }
            data {
              size
            }
            owner {
              address
            }
          }
        }
      }
    }
  `,
  variables: {
    cursor: '',
    entityId: '',
    limit: 25,
    sortOrder: 'INGESTED_AT_DESC',
  },
};

export const fetchGraphQL = async ({ query, variables }) => {
  try {
    const response = await axios.post(GRAPHQL_URL, { query, variables });
    return response.data;
  } catch (err) {
    console.error('GraphQL fetch error:', err);
    throw err;
  }
};

export const fetchMessagesAR = async ({ process }) => {
  try {
    baseData.variables.entityId = process;

    const res = await fetchGraphQL({ query: baseData.query, variables: baseData.variables });

    const messages = res.data.transactions.edges.map((m) => ({
      id: m.node.id,
      recipient: m.node.recipient,
      tags: m.node.tags,
      data: m.node.data,
      owner: m.node.owner.address,
      ingested_at: m.node.ingested_at,
    }));

    const detailed = await Promise.all(messages.map(async (m) => {
      try {
        const res = await axios.get(`${GATEWAY_URL}/${m.id}`);
        return { ...m, data: res.data };
      } catch (err) {
        console.error(`Failed to fetch message ${m.id}`, err);
        return null;
      }
    }));

    return detailed.filter(Boolean);
  } catch (err) {
    console.error('Failed to fetch messages:', err);
    throw err;
  }
};

export const spawnProcess = async (name, tags = []) => {
  const ao = connect({ GATEWAY_URL, GRAPHQL_URL });
  try {
    const allTags = [...CommonTags, ...tags];
    if (name) allTags.push({ name: 'Name', value: name });

    const processId = await ao.spawn({
      module: AOModule,
      scheduler: AOScheduler,
      signer: createDataItemSigner(window.arweaveWallet),
      tags: allTags,
    });
    return processId;
  } catch (err) {
    console.error('Spawn process error:', err);
    throw err;
  }
};

export const messageAR = async ({ tags = [], data = '', anchor = '', process }) => {
  const ao = connect({ GATEWAY_URL, GRAPHQL_URL });
  try {
    if (!process) throw new Error('Process ID is required.');
    const allTags = [...CommonTags, ...tags];

    return await ao.message({
      data,
      anchor,
      process,
      tags: allTags,
      signer: createDataItemSigner(globalThis.arweaveWallet),
    });
  } catch (err) {
    console.error('Message error:', err);
    throw err;
  }
};

export const transactionAR = async ({ data }) => {
  const arweave = Arweave.init({
    host: 'arnode.asia',
    port: 443,
    protocol: 'https',
  });

  await window.arweaveWallet.connect(['SIGN_TRANSACTION', 'DISPATCH']);

  const transaction = await arweave.createTransaction({ data });
  const signed = await window.arweaveWallet.dispatch(transaction);
  console.log('Signed:', signed);
};

export async function runLua({ code, process, tags = [] }) {
  const ao = connect({ GATEWAY_URL, GRAPHQL_URL });
  const finalTags = [...CommonTags, ...tags, { name: 'Action', value: 'Eval' }];

  const message = await ao.message({
    process,
    data: code,
    signer: createDataItemSigner(globalThis.arweaveWallet),
    tags: finalTags,
  });

  const result = await ao.result({ process, message });
  result.id = message;
  return result;
}

export async function readHandler({ process, action, tags = [], data }) {
  const ao = connect({ GATEWAY_URL, GRAPHQL_URL });
  const allTags = [{ name: 'Action', value: action }, ...tags];
  const newData = JSON.stringify(data || {});

  const response = await ao.dryrun({
    process,
    data: newData,
    tags: allTags,
  });

  const message = response.Messages?.[0];
  if (message?.Data) return JSON.parse(message.Data);
  if (message?.Tags) {
    return message.Tags.reduce((acc, { name, value }) => ({ ...acc, [name]: value }), {});
  }
}

export const useQuickWallet = async () => {
  const arweave = Arweave.init({ host: 'arnode.asia', port: 443, protocol: 'https' });
  try {
    const key = await arweave.wallets.generate();
    const address = await arweave.wallets.jwkToAddress(key);
    return { key, address };
  } catch (err) {
    console.error('Quick wallet error:', err);
    throw err;
  }
};

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
      }
    );
    return 'connected wallet successfully';
  } catch (err) {
    console.error('Connect wallet error:', err);
  } finally {
    console.log('Wallet connection attempt finished');
  }
}

export async function disconnectWallet() {
  return await window.arweaveWallet.disconnect();
}

export async function getWalletDetails() {
  const walletAddress = await window.arweaveWallet.getActiveAddress();
  const tokens = await window.arweaveWallet.userTokens();
  const tokenId = tokens[0]?.processId;
  const balance = await window.arweaveWallet.tokenBalance(tokenId);
  return { walletAddress, balance };
} 