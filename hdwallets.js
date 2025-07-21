import { generateMnemonic, mnemonicToSeedSync } from 'bip39';
import nacl from 'tweetnacl';
import { derivePath } from 'ed25519-hd-key';
import { Keypair } from '@solana/web3.js';

const mnemonic = generateMnemonic();
console.log("Mnemonic ===> ", mnemonic);

const seed = mnemonicToSeedSync(mnemonic);
console.log("Seed ===> ", seed.toString('hex'));

for (let i = 0; i < 4; i++) {
    const path = `m/44'/501'/${i}'/0'`;
    const deriveSeed = derivePath(path, seed.toString('hex')).key;
    const secret = nacl.sign.keyPair.fromSeed(deriveSeed).secretKey;
    console.log("public key ===> ", Keypair.fromSecretKey(secret).publicKey.toBase58());
}