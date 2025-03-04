import { createDataItemSigner, connect } from '@permaweb/aoconnect';

const CommonTags = [
    { name: 'Name', value: 'Anon' },
    { name: 'Version', value: '0.2.1' },
    { name: 'Authority', value: 'fcoN_xJeisVsPXA-trzVAuIiqO3ydLQxM-L4XbrQKzY' },
];

// send message to process
export const messageAR = async ({
    tags = [],
    data = '',
    anchor = '',
    process,
}) => {
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
};

// create payment transaction to arweave : Function Flow - Create->Sign->Verify->
export const transactionAR = async ({ data }) => {
    //sign transaction
    await window.arweaveWallet.connect(['SIGN_TRANSACTION', 'DISPATCH']);
    const transaction = await arweave.createTransaction({
        data,
    });
    const uint8Array = new Uint8Array(transaction.data);
    const string = String.fromCharCode(...uint8Array);
    console.log(string);

    const signed = await window.arweaveWallet.dispatch(transaction);
    console.log(signed);
};

export async function runLua({ code, process, tags = [] }) {
    const ao = connect();

    if (tags) {
        tags = [...CommonTags, ...tags];
    } else {
        tags = CommonTags;
    }
    tags = [...tags, { name: 'Action', value: 'Eval' }];

    const message = await ao.message({
        process,
        data: code,
        signer: createDataItemSigner(globalThis.arweaveWallet),
        tags,
    });

    const result = await ao.result({ process, message });
    result.id = message;
    return result;
}

export async function readHandler({ process, action, tags, data }) {
    const ao = connect();
    const basetags = [{ name: 'Action', value: action }];
    if (tags) basetags.push(...tags);
    newData = JSON.stringify(data || {});

    const response = await ao.dryrun({
        process,
        data: newData,
        tags: tags,
    });

    if (response.Messages && response.Messages.length) {
        if (response.Messages[0].Data) {
            return JSON.parse(response.Messages[0].Data);
        } else {
            if (response.Messages[0].Tags) {
                return response.Messages[0].Tags.reduce((acc, item) => {
                    acc[item.name] = item.value;
                    return acc;
                }, {});
            }
        }
    }
}

export const useQuickWallet = async () => {
    try {
        const data = await arweave.wallets.generate().then(async (key) => {
            const address = await arweave.wallets
                .jwkToAddress(key)
                .then((address) => address);
            return { key, address };
        });
        return data;
    } catch (error) {
        console.error('Error generating Arweave wallet:', error);
        throw error; // Re-throw the error for proper error handling
    }
};

// connect wallet
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

// disconnect wallet
export async function disconnectWallet() {
    return await window.arweaveWallet.disconnect();
}

// get wallet details
export async function getWalletDetails() {
    const walletAddress = await window.arweaveWallet.getActiveAddress();
    const tokens = await window.arweaveWallet.userTokens();
    const tokenId = tokens[0].processId;
    const balance = await window.arweaveWallet.tokenBalance(tokenId);
    return { walletAddress, balance };
}