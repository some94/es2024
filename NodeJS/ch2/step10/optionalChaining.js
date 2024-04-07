/*
옵셔널 체이닝 '?.'
프로퍼티가 없는 중첩 객체를 에러 없이 안전하게 접근할 수 있다.
 */
const a = {};
a.b;    // a가 객체이므로 문제 없음

const c = null;
try {
    c.d;
} catch (e) {
    console.error(e);       // TypeError: Cannot read properties of null(reading 'd') -> c에 문제가 있다는 뜻임
}
c?.d;       // 문제 없음

try {
    c.f();
} catch (e) {
    console.error(e);       // TypeError: Cannot read properties of null(reading 'f') -> c에 문제가 있다는 뜻임
}
c?.f();       // 문제 없음

try {
    c[0];
} catch (e) {
    console.error(e);       // TypeError: Cannot read properties of null(reading '0') -> c에 문제가 있다는 뜻임
}
c?.[0];       // 문제 없음
