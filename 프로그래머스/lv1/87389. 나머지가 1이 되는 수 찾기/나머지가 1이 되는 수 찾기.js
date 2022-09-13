function solution(n) {
    for (let x=1; x<1000000;x++) {
        if (n % x === 1){
            return x;
        }}
}

// 개선할 점
// 1. for문 대신 while 문을 쓰면 더 간단한 코드가 완성된다.
// 2. x를 인자로 받는다면 따로 변수선언할 필요가 없다.
// function solution(n,x=1) {
//     while (x++)) {
//         if (n % x === 1){
//             return x;
//             break;
//         }}
// }