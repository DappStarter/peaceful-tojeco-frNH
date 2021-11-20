require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remind mistake heavy climb swift giant'; 
let testAccounts = [
"0xf45a679e5bb867547c4f1bea9f6e50c544efa63a52d9f308f966f09e53ffc9f7",
"0xbcb52191c4628381ce6bcf6f5399d9cebd5835b8bbc2aa7f6be64332388f53f5",
"0xdfe13b1de150492c96045518e81dda79ac37c11fa86682001a149a7331de56bd",
"0x6d4531179a0a4c8e272872eb169468e48ea757a93737e88f2b0f3e66572c7578",
"0x57b6e65bcba38bdc3cd06593475f66c6cb8fa19c8225496042b10fe0c7e028d0",
"0xb69c5f4e062abc6fff5b2e351b8dc2352ba5b3fde44e900fc1eb9a9cf3d0fea4",
"0x7faa4b627c76a38bb5b4af0aefdf225eb93f177ebadb7881517014fc35c0d944",
"0xd81deeebf308abf77368f6ac8474d60633672c49e59fd62e0355174fdcf3f4d6",
"0xf2ef21c50a01b54a320a67803b45fc97aa833aad833235dc3e240f103f6a21bb",
"0xf0831803a73f8a41d493f850b628ba97b687dac08082f309bb531b7556ac42cd"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


