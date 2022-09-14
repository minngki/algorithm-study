function solution(x, n) {
   return Array(n).fill(1).map((a,idx)=> x*(idx+1))
}