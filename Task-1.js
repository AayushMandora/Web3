const crypto = require("crypto");

// Assignment-1
let i = 1;
while (true) {
    const string = i.toString();
    const hash = crypto.createHash('sha256').update(string).digest('hex');
    if (hash.startsWith("00000")) {
        console.log(i);
        break;
    }
    i++;
}

// Assignment-2
// let i=1;
while (true) {
    const string = "Aayush" + i.toString();
    const hash = crypto.createHash('sha256').update(string).digest('hex');
    if (hash.startsWith("00000")) {
        console.log(i);
        break;
    }
    i++;
}