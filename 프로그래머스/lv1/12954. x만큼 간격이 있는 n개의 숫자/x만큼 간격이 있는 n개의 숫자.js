function solution(x, n) {
   return Array(n).fill(1).map((a,idx)=> x*(idx+1))
}

// fill x를 해두고 a를 마지막에 곱하는 게 더 효율적이다!
// Array(n).fill(x).map((a,idx)=> a*(idx+1)) 요렇게