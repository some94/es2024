/*
null 병합 연산자
|| 대용으로 사용되며, falsy 값 중 null 과 undefined만 따로 구분함
a ?? b 에서 a가 null도 아니고 undefined도 아니면 a, 그 외의 경우는 b
 */

const a = 0;
const b = a || 3;
console.log(b);

const c = 0;
const d = c ?? 3;
console.log(d);

const e = null;
const f = e ?? 3;
console.log(f);

const g = undefined;
const h = g ?? 3;
console.log(h);