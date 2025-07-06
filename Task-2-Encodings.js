const word = "Aayush";

const asciiEncoding = (string) => {
    const result = new Uint8Array(string.split('').map(char => char.charCodeAt(0)));
    console.log("Ascii encoding===>", result);
}

const hexEncoding = (string) => {
    const result = string.split('').map(char => char.charCodeAt(0).toString(16).padStart(2, '0')).join('');
    console.log("Hex encoding===>", result);
}

const base64Encoding = (string) => {
    const result = Buffer.from(string).toString('base64');
    console.log("Base64 encoding===>", result);
}

asciiEncoding(word);
hexEncoding(word);
base64Encoding(word);