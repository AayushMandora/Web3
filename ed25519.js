import * as ed from '@noble/ed25519';

const privKey = ed.utils.randomPrivateKey();
const pubKey = await ed.getPublicKeyAsync(privKey);

console.log("Private Key:", privKey);
console.log("Public Key:", pubKey);

const message = new TextEncoder().encode("Aayush Mandora");

const signature = await ed.signAsync(message, privKey);
console.log("Signature:", signature);

const isValid = await ed.verifyAsync(signature, message, pubKey);
console.log("Signature is valid:", isValid);