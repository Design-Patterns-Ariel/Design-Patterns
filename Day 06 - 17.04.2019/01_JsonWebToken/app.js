const jwt = require('jsonwebtoken');
const {SHA256}= require('crypto-js');

var data = { 
	password : SHA256("1234").toString(),
	name : 'Bob'
};

var token = jwt.sign(data,'my secret');
console.log('encoded',token)


var decoded = jwt.verify(token,'my secret');
console.log('decoded',decoded)

str1="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6IjAzYWM2NzQyMTZmM2UxNWM3NjFlZTFhNWUyNTVmMDY3OTUzNjIzYzhiMzg4YjQ0NTllMTNmOTc4ZDdjODQ2ZjQiLCJuYW1lIjoiQm9iIiwiaWF0IjoxNTU3MjIxOTQ5fQ.ulWYUTG4JPMbf2yy1Oidigyo0llTjbxAs5I88-uHB5c";
console.log(length(str1))