function solution(s) {
    return (s.length === 4|| s.length ===6) && !/[a-zA-z]/g.test(s)
}

// 개선점
// ! 1. 정규식으로 length를 다룰 수 있다. + 규식이형 공부
// ! 2. 조건식을 내가 받아들이는 그 자체로 말고 대우 조건을 생각해서 쉽게 만들어보기
//  /^\d{6}$|^\d{4}$/ ..의문