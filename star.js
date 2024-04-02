// 별찍기
console.log('[자바스크립트 별 찍기]');

// 1. 직각삼각형
console.log('\n\n1. 직각삼각형');
for (let i = 0; i < 5; i++) {
    console.log('*'.repeat(i + 1));
}

// 2. 역직각삼각형
console.log('\n\n2. 역직각삼각형');
for(let i = 5; i > 0; i--) {
    console.log('*'.repeat(i));
}

// 3. 직각삼각형(홀수별)
console.log('\n\n3. 직각삼각형(홀수별)');
for (let i = 0; i < 10; i++) {
    if(i % 2 === 0) continue;
    console.log('*'.repeat(i));
}

// 4. 직각삼각형(우측 정렬)
console.log('\n\n4. 직각삼각형(우측 정렬)');
for (let i = 0; i < 5; i++) {
    console.log(' '.repeat(4 - i) + '*'.repeat(i + 1));
}

// 5. 역직각삼각형(우측 정렬)
console.log('\n\n5. 역직각삼각형(우측 정렬)');
for (let i = 0; i < 5; i++) {
    console.log(' '.repeat(i) + '*'.repeat(5 - i));
}

// 6. 트리
console.log('\n\n6. 트리');
for(let i = 0; i < 5; i++) {
    console.log(' '.repeat(4 - i) + '*'.repeat(i * 2 + 1) + ' '.repeat(4 - i));
}

// 7. 마름모
console.log('\n\n7. 마름모');
for(let i = 0; i < 9; i++) {
    console.log(' '.repeat(Math.abs(4 - i)) + '*'.repeat(9 - Math.abs((i - 4) * 2)) + ' '.repeat(Math.abs(4 - i)));
}
