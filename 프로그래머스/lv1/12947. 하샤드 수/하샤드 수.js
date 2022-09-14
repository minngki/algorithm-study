function solution(x) {
    const xArr = (x+'').split('')
    return x%(xArr.reduce((acc,cur)=> acc+=parseInt(cur),0))===0
}