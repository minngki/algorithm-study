function solution(arr, divisor) {
    let divArr = arr.filter(num=> num%divisor===0).sort((a,b)=>a-b)
    return divArr.length === 0 ? [-1] : divArr
}

// 개선할 점 : sort는 엄청난 메모리를 소모하기 때문에 마지막에 반환할 때만 사용하는 것이 더 효율적이다.
// function solution(arr, divisor) {
//     let divArr = arr.filter(num=> num%divisor===0)
//     return divArr.length === 0 ? [-1] : divArr.sort((a,b)=>a-b)
// }