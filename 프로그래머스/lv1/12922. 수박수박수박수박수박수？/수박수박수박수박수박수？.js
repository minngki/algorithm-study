function solution(n) {
    let str = '수박'
    return n%2===0? str.repeat(n/2) : str.repeat(n/2) + '수'
}


// 개선점: 또! 두 번 반복되는 것은 제외
// function solution(n) {
//     return '수박'.repeat(n/2) + (n%2===0? '수':'')
// }