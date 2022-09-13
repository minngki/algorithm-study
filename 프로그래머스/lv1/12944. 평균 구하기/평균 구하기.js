function solution(arr) {
    return arr.reduce((acc,cur)=> acc += cur,0)/arr.length
}


// 다른 사람 문제 풀이 보고 참고한 점
// acc 자체가 누산기 이므로 굳이 누적 연산자를 사용할 필요는 없다.