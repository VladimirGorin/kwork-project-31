export const config = {
    mainAccountPrivateKey: '',
    nftCountPerAccount: 3,
    aptosAmountPerAccount: { min: 0.03, max: 0.05 }, // увеличить сумму пропорционально количеству NFT
    gasUnitPrice: 100,
    maxGasAmount: 10000, // увеличить газ для более быстрых транзакций, строго не рекомендуется
    nodeUrl: "https://fullnode.testnet.aptoslabs.com"
}