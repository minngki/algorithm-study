function solution(n) {
    let sortArr = (n+'').split('').map((str)=> parseInt(str)).sort((a,b)=> b-a)
    let num = parseInt(sortArr.reduce((acc,cur)=> acc+String(cur)))
    return num
}