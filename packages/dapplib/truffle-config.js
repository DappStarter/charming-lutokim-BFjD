require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remember modify inner kitten surge surge'; 
let testAccounts = [
"0x6d3d785cddc0adb7861716fa49cc005083f1d40e6bb477411c7d5b92f6b65a9a",
"0xf19b6dc8d704acde5ce4066f676c7ea09dbfb6cc3d6554dfe784e65d310e1af7",
"0x097da92f5558b23f042defe570fc0b12e83b0fe5f53cb729887412a6eaee0d57",
"0x01a30e17673828adefb1a162e8dedc002a60995a83639c6b38041550fa4e1668",
"0xe43c69026e827eda3369a7f0057ad3ca87f2d340acda447f2f7b10a57d7725f2",
"0x717d466b825f55a7b3046d51b3e25f1c43a922c14bb349a32ffe27ccc10883e8",
"0xe3cb4bbea2cc3437f88bbc82e18b82b2b190c435491dfaeb097bbe5425693f34",
"0xe47b3f45664844e746988e71a5c2f48f290b818f2e7beb69edccf5567129eeaa",
"0x6c466e6195f97c39881a0cfde7ee2a30fe8517e00ef485a8abfcf602b661d71e",
"0x0c42da034e54bb35cf5b6d9d9931354859df87109cb02836f1ed3f202ef5d5e1"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

