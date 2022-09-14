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

// 개선할 점 : 내가 풀면서도 true의 경우가 있으니 구분할 필요가 있지 않을까..? 라는 논리적 사고 접근방식에 집중하기! 20분 넘어가면 안 되겠지만.
// p y 둘 다 안 가지고 있다는 건 split length 도 0이라는 것! 좀만 집중하면 높은 점수 받았을 텐데!
// function solution2(s){
//     return s.toLowerCase().split('p').length === s.toLowerCase().split('y').length
// }