








const fs = require('fs');
const readableStream = fs.ReadStream('./01-read-file/text.txt', 'utf-8');
readableStream.on('data', chunk => console.log(chunk)); 



/* 
const fs = require('fs');
const stream = fs.createReadStream('./01-read-file/text.txt', 'utf-8');
let data = '';
stream.on('data', chunk => data += chunk);
stream.on('end', () => console.log('End', data));
stream.on('error', error => console.log('Error', error.message)); */