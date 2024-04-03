// 1분 퀴즈 7
// 구구단을 출력하되, 결과에 짝수가 하나도 나오지 않게 해보세요. continue 문을 사용하세요.
console.log('Quiz 7. 짝수 없는 구구단');

for (let i = 1; i < 10; i++) {
    if (i % 2 === 0) continue;
    for(let j = 1; j < 10; j++) {
        if (j % 2 === 0) continue;
        console.log(i + ' x ' + j + ' = ' + i * j);
    }
}

// 1분 퀴즈 9
// 다음 배열에서 '라'를 모두 제거하세요. indexOf와 splice를 사용하세요.
console.log('\n\nQuiz 9. \'라\'를 모두 제거하라 ');

const arr = ['가', '라', '다', '라', '마', '라'];

while (arr.indexOf('라') !== -1) {
    arr.splice(arr.indexOf('라'), 1)
}

console.log(arr);

// 1분 퀴즈 10
// 매개변수로 x, y, z 을 받아 곱한 값을 반환하는 multiply 함수를 만들어 보세요. 단, 화살표 함수로 만드세요.
console.log('\n\nQuiz 10. multiply 함수');

const multiply = (x, y, z) => x * y * z;

console.log(multiply(2, 3, 4));  // 24

// 1분 퀴즈 11
// 다음과 같이 객체 안에 객체가 있을 때, '조' 값에 접근하는 방법은 무엇일까요?
console.log('\n\nQuiz 11. \'조\'에 접근하기');

const zerocho = {
    name: {
        first: '현영',
        last: '조',
    },
    gender: 'M',
};

console.log(zerocho.name.last);

// ---------------------------------------------------------------
// [4장] 1분 퀴즈 1
// 다음 코드의 console.log 결과를 맞춰보세요.
console.log('\n\n[4장] Quiz 1. console.log 결과는?')

const hof = (a) => (b) => (c) => {
    return a + (b * c);
};
const first = hof(3);
const second = first(4);
const third = second(5);
console.log(third);    // 23
console.log('console.log(third)의 결과는 23 입니다.')

// 1분 퀴즈 2
// 다음 if문의 중첩을 줄여보세요
console.log('\n\nQuiz 2. if문 중첩 줄이기');

function test() {
    let result = '';
    if (a) {
        if (!b) {
            result = 'c';
        }
    } else {
        result = 'a';
    }
    result += 'b';
    return result;
}

function test1() {
    let result = '';
    if (!a) {
        result = 'a';
        result += 'b';
        return result;
    } else {
        if (!b) {
            result = 'c';
        }
        result += 'b';
        return result;
    }
}

