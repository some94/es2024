// 비동기 메서드로 순서 유지하기(프로미스 형식)

const fs = require('fs').promises;

console.log('시작');

fs.readFile('./readme2.txt').then((data) => {
    console.log('1번', data.toString());
    return fs.readFile('./readme2.txt');
}).then((data) => {
    console.log('2번', data.toString());
    return fs.readFile('./readme2.txt');
}).then((data) => {
    console.log('3번', data.toString());
    console.log('끝');
}).catch((err) => {
    console.error(err);
});