function solution(a, b) {
    return a.map((num,idx)=> num*b[idx]).reduce((acc,cur)=> acc+cur,0)
}

// 개선점: reduce도 idx가 있다!

// function solution(a, b) {
//     return a.reduce((acc,cur,idx)=> acc+= cur*b[idx],0)
// }