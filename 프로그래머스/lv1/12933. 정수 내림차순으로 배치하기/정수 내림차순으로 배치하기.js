function solution(n) {
    let sortArr = (n+'').split('').map((str)=> parseInt(str)).sort((a,b)=> b-a)
    let num = parseInt(sortArr.reduce((acc,cur)=> acc+String(cur)))
    return num
}


// function solution(n) {
//     let sortArr = (n+'').split('').sort().reverse()
//     let changeNum = sortArr.join('')
//     return +changeNum
// }