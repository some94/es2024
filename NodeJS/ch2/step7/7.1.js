/*
콜백 지옥이라고 불리는 지저분한 자바스크립트 코드의 해결책
프로미스: 내용이 실행은 되었지만 결과를 아직 반환하지 않은 객체
Then을 붙이면 결과를 반환함

Resolve(성공리턴값) -> then으로 연결
Reject(실패리턴값) -> catch로 연결
Finally 부분은 무조건 실행됨
*/

const condition = true;     // true면 resolve, false면 reject
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});

promise
    .then((message) => {
        console.log(message);   // 성공(resolve)한 경우 실행
})
    .catch((error) => {
    console.error(error);           // 실패(reject)한 경우 실행
})
    .finally(() => {    // 끝나고 무조건 실행
    console.log('무조건');
});