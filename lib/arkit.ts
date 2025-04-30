import axios from 'axios';
import Arweave from 'arweave';
import type { JWKInterface } from 'arweave/node/lib/wallet';

// config constants
export const HOST_NAME = 'arnode.asia';
export const GATEWAY_URL = 'https://arnode.asia';
export const GRAPHQL_URL = 'https://arnode.asia/graphql';
export const AOModule = 'Do_Uc2Sju_ffp6Ev0AnLVdPtot15rvMjP-a9VVaA5fM';
export const AOScheduler = '_GQ33BkPtZrqxA84vM8Zk-N2aO0toNNu_C-l-rawrBA';

// Types
export interface DispatchResult {
    id: string;
    type?: "BASE" | "BUNDLED";
}

export interface Tag {
    name: string;
    value: string;
}

export interface WalletDetails {
    walletAddress: string;
    balance: number;
}

export interface GraphQLEdge {
    node: {
        id: string;
        ingested_at: number;
        recipient: string;
        block: {
            timestamp: number;
            height: number;
        };
        tags: Tag[];
        data: { size: number };
        owner: { address: string };
    };
}

export interface MessageResponse {
    id: string;
    recipient: string;
    tags: Tag[];
    data: string;
    owner: string;
    ingested_at: number;
}

// Common tags used across the application
export const CommonTags: Tag[] = [
    { name: 'Name', value: 'Anon' },
    { name: 'Version', value: '1.0.0' },
    { name: 'Authority', value: 'fcoN_xJeisVsPXA-trzVAuIiqO3ydLQxM-L4XbrQKzY' },
];

// GraphQL base query
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

// GraphQL operations
export const fetchGraphQL = async ({ query, variables }: { query: string; variables: { cursor: string; entityId: string; limit: number; sortOrder: string } }) => {
    try {
        console.log('Fetching GraphQL data...');
        const response = await axios.post(GRAPHQL_URL, { query, variables });
        return response.data;
    } catch (error) {
        console.error('GraphQL fetch error:', error);
        throw error;
    }
};

// Message operations
export const fetchMessagesAR = async ({ process }: { process: string }): Promise<MessageResponse[]> => {
    try {
        console.log('Fetching messages for process:', process);
        baseData.variables.entityId = process;

        const res = await fetchGraphQL({ query: baseData.query, variables: baseData.variables });

        const messages = res.data.transactions.edges.map((m: GraphQLEdge) => ({
            id: m.node.id,
            recipient: m.node.recipient,
            tags: m.node.tags,
            data: m.node.data,
            owner: m.node.owner.address,
            ingested_at: m.node.ingested_at,
        }));

        const detailed = await Promise.all(
            messages.map(async (m: MessageResponse) => {
                try {
                    const res = await axios.get(`${GATEWAY_URL}/${m.id}`);
                    return { ...m, data: res.data };
                } catch (error) {
                    console.error(`Failed to fetch message ${m.id}:`, error);
                    return null;
                }
            })
        );

        return detailed.filter((item): item is MessageResponse => item !== null);
    } catch (error) {
        console.error('Failed to fetch messages:', error);
        throw error;
    }
};

export const messageAR = async ({
    tags = [],
    data = '',
    anchor = '',
    process,
}: {
    tags?: Tag[];
    data?: string;
    anchor?: string;
    process: string;
}): Promise<string> => {
    if (typeof window === 'undefined') {
        throw new Error('Cannot send message in non-browser environment');
    }
    // Dynamically import aoconnect functions
    const { connect, createSigner } = await import('@permaweb/aoconnect');
    const ao = connect({ GATEWAY_URL, GRAPHQL_URL, MODE: 'mainnet' });
    try {
        console.log('Sending message to process:', process);
        if (!process) throw new Error('Process ID is required.');

        const allTags = [...CommonTags, ...tags];
        const messageId = await ao.message({
            data,
            anchor,
            process,
            tags: allTags,
            signer: createSigner(window.arweaveWallet),
        });

        console.log('Message sent successfully:', messageId);
        return messageId;
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};

// Process operations
export const spawnProcess = async (name: string, tags: Tag[] = []): Promise<string> => {
    if (typeof window === 'undefined') {
        throw new Error('Cannot spawn process in non-browser environment');
    }
    // Dynamically import aoconnect functions
    const { connect, createSigner } = await import('@permaweb/aoconnect');
    const ao = connect({ GATEWAY_URL, GRAPHQL_URL, MODE: 'legacy' });
    try {
        console.log('Spawning new process...');
        const allTags = [...CommonTags, ...tags];
        if (name) allTags.push({ name: 'Name', value: name });

        const processId = await ao.spawn({
            module: AOModule,
            scheduler: AOScheduler,
            signer: createSigner(window.arweaveWallet),
            tags: allTags,
        });

        console.log('Process spawned successfully:', processId);
        return processId;
    } catch (error) {
        console.error('Spawn process error:', error);
        throw error;
    }
};

// Transaction operations
export const transactionAR = async ({ data }: { data: string }): Promise<DispatchResult> => {
    if (typeof window === 'undefined' || !window.arweaveWallet) {
        throw new Error('Wallet connection required in browser environment');
    }
    const arweave = Arweave.init({
        host: HOST_NAME,
        port: 443,
        protocol: 'https',
    });

    try {
        console.log('Creating transaction...');
        // connectWallet should ideally be called beforehand via useAuth().login()
        // await window.arweaveWallet.connect(['SIGN_TRANSACTION', 'DISPATCH']);

        const transaction = await arweave.createTransaction({ data });
        // Assuming dispatch is available after connection
        const signed: DispatchResult = await window.arweaveWallet.dispatch(transaction);
        console.log('Transaction signed and dispatched:', signed);
        return signed;
    } catch (error) {
        console.error('Transaction error:', error);
        throw error;
    }
};

// Lua operations
export async function runLua({ code, process, tags = [] }: { code: string; process: string; tags?: Tag[] }): Promise<Record<string, unknown> & { id: string }> {
    if (typeof window === 'undefined') {
        throw new Error('Cannot run Lua in non-browser environment');
    }
    // Dynamically import aoconnect functions
    const { connect, createSigner } = await import('@permaweb/aoconnect');
    const ao = connect({ GATEWAY_URL, GRAPHQL_URL, MODE: 'mainnet' });
    try {
        console.log('Running Lua code...');
        const finalTags = [...CommonTags, ...tags, { name: 'Action', value: 'Eval' }];

        const messageId = await ao.message({
            process,
            data: code,
            signer: createSigner(window.arweaveWallet),
            tags: finalTags,
        });

        const messageResult: Record<string, unknown> = await ao.result({ process, message: messageId });
        const finalResult = { ...messageResult, id: messageId };
        console.log('Lua execution completed:', finalResult);
        return finalResult;
    } catch (error) {
        console.error('Lua execution error:', error);
        throw error;
    }
}

// Handler operations
export async function readHandler({
    process,
    action,
    tags = [],
    data,
}: {
    process: string;
    action: string;
    tags?: Tag[];
    data?: Record<string, unknown>;
}): Promise<Record<string, unknown> | null> {
    // Dynamically import aoconnect dryrun
    const { dryrun } = await import('@permaweb/aoconnect');
    try {
        console.log('Reading handler using legacy dryrun...');
        const allTags = [{ name: 'Action', value: action }, ...tags];
        const newData = JSON.stringify(data || {});

        const response = await dryrun({
            process,
            data: newData,
            tags: allTags,
        });

        const message = response.Messages?.[0];
        if (message?.Data) {
            try {
                return JSON.parse(message.Data);
            } catch (parseError) {
                console.error('Error parsing message data:', parseError);
                return { rawData: message.Data };
            }
        }
        if (message?.Tags) {
            return message.Tags.reduce((acc: Record<string, string>, { name, value }: Tag) => {
                acc[name] = value;
                return acc;
            }, {});
        }
        console.warn('Read handler dryrun returned no data or tags:', response);
        return null;
    } catch (error) {
        console.error('Read handler error:', error);
        throw error;
    }
}

// Wallet operations
export const useQuickWallet = async (): Promise<{ key: JWKInterface; address: string }> => {
    // This function seems okay as Arweave.init might be safe server-side
    const arweave = Arweave.init({ host: HOST_NAME, port: 443, protocol: 'https' });
    try {
        console.log('Generating quick wallet...');
        const key: JWKInterface = await arweave.wallets.generate();
        const address = await arweave.wallets.jwkToAddress(key);
        console.log('Quick wallet generated:', address);
        return { key, address };
    } catch (error) {
        console.error('Quick wallet error:', error);
        throw error;
    }
};

export async function connectWallet(): Promise<string | undefined> {
    if (typeof window === 'undefined' || !window.arweaveWallet) {
        console.error('Cannot connect wallet in non-browser environment or wallet not found');
        return;
    }
    try {
        console.log('Connecting wallet...');
        // No need for explicit check again, done above

        await window.arweaveWallet.connect(
            ['ACCESS_ADDRESS', 'SIGN_TRANSACTION', 'ACCESS_TOKENS', 'DISPATCH'],
            {
                name: 'Anon',
                logo: 'https://arweave.net/pYIMnXpJRFUwTzogx_z5HCOPRRjCbSPYIlUqOjJ9Srs',
            }
        );

        console.log('Wallet connected successfully');
        return 'connected wallet successfully';
    } catch (error) {
        console.error('Connect wallet error:', error);
        throw error;
    }
}

export async function disconnectWallet(): Promise<void> {
    if (typeof window === 'undefined' || !window.arweaveWallet) {
        console.error('Cannot disconnect wallet in non-browser environment or wallet not found');
        return;
    }
    try {
        console.log('Disconnecting wallet...');
        await window.arweaveWallet.disconnect();
        console.log('Wallet disconnected successfully');
    } catch (error) {
        console.error('Disconnect wallet error:', error);
        throw error;
    }
}

export async function getWalletDetails(): Promise<WalletDetails> {
    if (typeof window === 'undefined' || !window.arweaveWallet) {
        throw new Error('Cannot get wallet details in non-browser environment or wallet not found');
    }
    try {
        console.log('Getting wallet details...');
        const arweave = Arweave.init({
            host: HOST_NAME,
            port: 443,
            protocol: 'https'
        });
        const walletAddress = await window.arweaveWallet.getActiveAddress();
        const balanceRaw = await arweave.wallets.getBalance(walletAddress);
        const balance = arweave.ar.winstonToAr(balanceRaw);
        console.log('Wallet details retrieved:', { walletAddress, balance });
        return { walletAddress, balance: Number(balance) };
    } catch (error) {
        console.error('Get wallet details error:', error);
        throw error;
    }
}