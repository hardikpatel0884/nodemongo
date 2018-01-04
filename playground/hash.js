/**
 * this file how to encrypt string
 * Author Hardik Patel
 * */

const {SHA256} = require('crypto-js');
const jwt=require('jsonwebtoken');

var msg="this is string to convert";
var hash=SHA256(msg).toString();
console.log(hash);
