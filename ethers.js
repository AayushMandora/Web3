import { ethers, Wallet } from "ethers";

const provider = new ethers.JsonRpcProvider(x);
const signer = await provider.getSigner()

signer = new Wallet(id("test"))


message = "sign into ethers.org?"

// Signing the message
sig = await signer.signMessage(message);
console.log("Signature:", sig);

const result = verifyMessage(message, sig);
console.log("Signature is valid:", result);