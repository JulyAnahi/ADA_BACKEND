const crypto=require('crypto');// es nativo de node

const data='Este es un mensaje secreto '
const hash=crypto.createHash('sha256');
hash.update(data);
const hashOutput=hash.digest('hex')// formato hexadecimal
console.log('hash SHA-256',hashOutput);
