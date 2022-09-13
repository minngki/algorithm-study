function solution(n) {
    let list = []
    for (let i = 1; i<n+1 ; i++) {
        n % i === 0 && list.push(i);
    }
    return (list.reduce((acc, cur)=> acc+cur,0))
}


// 개선할 점 : 숫자를 걍 합치는 것이기 때문에 문자열이 아니면 굳이 list로 바꿔서 할 필요가 없다 !
// function solution(n) {
//     let sum = 0
//     for (let i = 1; i<n+1 ; i++) {
//         n % i === 0 && sum+=i;
//     }
//     return (sum)
// }