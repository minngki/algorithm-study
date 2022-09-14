function solution(s) {
    let len = s.length
    let evenIdx = Math.trunc(len/2)
    let oddIdx = len/2-1
    return (len %2!==0 ? s.slice(evenIdx,evenIdx+1) : s.slice(oddIdx,oddIdx+2))
}


// 개선점 : substr 을 안 쓰겠다는 고집, Math 꽤 어렵 
// 1. substr(startIndex, length)
// 2. splice(startIndex, endIndex)

// function solution(s) {
//     let idx = Math.ceil(s.length/2)-1
    
//     return s.slice(idx,s.length %2!==0 ? idx+1 : idx+2)
// }