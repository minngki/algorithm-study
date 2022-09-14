function solution(arr, divisor) {
    let divArr = arr.filter(num=> num%divisor===0).sort((a,b)=>a-b)
    return divArr.length === 0 ? [-1] : divArr
}