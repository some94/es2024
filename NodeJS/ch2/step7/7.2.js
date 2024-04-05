/*
프로미스의 then 연달아 사용 가능(프로미스 체이닝)
then 안에서 return한 값이 다음 then으로 넘어감
return 값이 프로미스면 resolve 후 넘어감
에러가 난 경우 catch로 이동하고 catch에서 한 번에 처리
 */

promise.then((message) => {
    return new Promise((resolve, reject) => {
        resolve(message);
    });
}).then((message2) => {
    return new Promise((resolve, reject) => {
        resolve(message2);
    });
}).then((message3) => {
    console.log(message3);
}).catch((error) => {
    console.error(error);
})