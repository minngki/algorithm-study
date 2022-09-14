function solution(s) {
    let len = s.length
    let evenIdx = Math.trunc(len/2)
    let oddIdx = len/2-1
    return (len %2!==0 ? s.slice(evenIdx,evenIdx+1) : s.slice(oddIdx,oddIdx+2))
}
    