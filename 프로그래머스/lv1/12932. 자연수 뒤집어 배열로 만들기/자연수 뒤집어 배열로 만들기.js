function solution(n) {
    let tempList = [];
    for (let row of (n+"").split("")) {
        tempList.unshift(Number(row));
    }
    return tempList;
}

// 개선할 점 
// 1. 문자열 접근 - reverse 함수 사용하기
// function solution(n) {
//     return (n+"").split("").reverse().map(v => parseInt(v));
// }
// 2. 수학적으로 접근하는 방법
// function solution(n) {
//     var arr = [];

//     do {
//         arr.push(n%10);
//         n = Math.floor(n/10);
//     } while (n>0);

//     return arr;
// }