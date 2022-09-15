function solution(a, b) {
    return a.map((num,idx)=> num*b[idx]).reduce((acc,cur)=> acc+cur,0)
}