function solution(s){
   const pCnt = s.toLowerCase().split('p').length - 1
   const yCnt = s.toLowerCase().split('y').length - 1
   if (pCnt + yCnt === -2) {
       return true
   } else {
   if (pCnt === yCnt) {
       return true
   } else {
       return false
   } }
}