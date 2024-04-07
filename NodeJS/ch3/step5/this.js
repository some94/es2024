console.log(this);      // 최상위 스코프의 this는 module.exports를 가리킨다
console.log(this === module.exports);
console.log(this === exports);

function whatIsThis() {
    console.log('function', this === exports, this === global);
}
whatIsThis();