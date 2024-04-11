const url = require('url');
const { URL } = url;

const myURL = new URL('https://www.rallit.com/resume/template');

console.log('new URL(): ', myURL);
console.log('url.format(): ', url.format(myURL));