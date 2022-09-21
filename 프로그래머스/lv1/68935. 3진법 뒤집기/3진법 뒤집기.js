function solution(n) {
    let ans= n.toString(3).split('').reverse().join('')
    return parseInt(ans,3)
}



// 와.
// 자릿수 구하는 방법 .. 왜 했지 갑자기?
    // let len = 0
    // let tempNum = n
    // while (tempNum>0) {
    //     ++len
    //     tempNum = Math.floor(tempNum/10)
    // }