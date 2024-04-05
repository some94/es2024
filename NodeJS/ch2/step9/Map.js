const m = new Map();

m.set('a', 'b');        // set(키, 값)으로 Map에 속성 추가
m.set(3, 'c');          // 문자열이 아닌 값을 키로 사용 가능
const d = {};
m.set(d, 'e');          // 객체도 가능하다.

m.get(d);                             // get(키)로 속성값 조회
console.log(m.get(d));      // e

m.size;                               // size로 속성 개수 조회
console.log(m.size);        // 3

for (const [k, v] of m) {       // 반복문에 바로 넣어 사용 가능
    console.log(k, v);             // 'a', 'b', 3, 'c', {}, 'e'
}                                             // 속성 간의 순서도 보장된다.

m.forEach((v, k) => {       // forEach도 사용 가능
    console.log(k, v);                                            // 결과는 위와 동일하다.
});

m.has(d);                           // has(키)로 속성 존재 여부를 확인한다.
console.log(m.has(d));    // true

m.delete(d);                      // delete(키)로 속성을 삭제한다.
m.clear();                           // clear()로 전부 제거한다.
console.log(m.size);         // 0