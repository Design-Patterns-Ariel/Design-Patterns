const {SHA256}= require('crypto-js');
const {SHA512}= require('crypto-js');

const message = '1234567891234567891234567891234567891234567891234567891234567891234567899';
const hash =SHA256(message).toString()

console.log(`Message ${message}`)
console.log(`Message ${hash}`)
console.log(`Message ${hash.length}`)


const message2 = '123456';
const hash2 =SHA512(message).toString()

console.log(`Message ${message2}`)
console.log(`Message ${hash2}`)
console.log(`Message ${hash2.length}`)
