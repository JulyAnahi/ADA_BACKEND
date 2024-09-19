const crypto=require('crypto');

const data= 'mensaje secreto';
const secretkey='my clave';
const hmac=crypto.createHmac('sha256',secretkey);
hmac.update(data);
const hmacOutput=hmac.digest('hex')
console.log(' HMAC sha-256',hmacOutput);