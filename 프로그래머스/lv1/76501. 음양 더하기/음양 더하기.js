function solution(absolutes, signs) {
    return absolutes.map((a,idx)=> signs[idx] ? +a : -a).reduce((acc,cur)=> acc+cur, 0)
}