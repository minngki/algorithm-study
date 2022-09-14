function solution(a, b) {
    let newArr =
    Array(Math.abs(a-b)+1).fill(a).map((x,idx)=> a>b ? x-idx : x+idx)
    return a===b ? a : newArr.reduce((acc,cur)=> acc+cur, 0)
}