function solution(x) {
    const xArr = (x+'').split('')
    return x%(xArr.reduce((acc,cur)=> acc+=parseInt(cur),0))===0
}

// 개선할 점
// ! 1. 숫자형! 간단하게 쓰는 법 : +acc + +cur 이라고 써도 됐었음! 
// ! 2. 구문 앞에 ! 붙는 것 : null, 0, nan, ''(빈배열), undefined 
