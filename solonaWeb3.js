import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

const keyPair = Keypair.generate();

const pubKey = keyPair.publicKey.toBytes();;
const privKey = keyPair.secretKey;

console.log("Public Key:", pubKey);
console.log("Private Key:", privKey);

const message = new TextEncoder().encode("Aayush");
console.log("Message:", message);

const sign = nacl.sign.detached(message, privKey);

const result = nacl.sign.detached.verify(message, sign, pubKey);
console.log("Signature is valid:", result);