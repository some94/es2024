// fs 프로미스
// 콜백 대신 프로미스로 사용 가능

const fs = require('fs').promises;

fs.readFile('./readme.txt').then((data) => {
    console.log(data);
    console.log(data.toString());
}).catch((err) => {
    console.error(err);
});