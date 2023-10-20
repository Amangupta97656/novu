const crypto = require('crypto');

// Function to calculate the SHA-256 hash of a string
function calculateSHA256Hash(inputString) {
    const hash = crypto.createHash('sha256');
    hash.update(inputString);
    return hash.digest('hex');
}

const inputString = 'Hello, World!';
const sha256Hash = calculateSHA256Hash(inputString);

console.log('Input String:', inputString);
console.log('SHA-256 Hash:', sha256Hash);
