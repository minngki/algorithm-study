function solution(num,x=0) {
    if (num === 1) {
        return 0
    } else {
        let calcNum = num
        for (let i = 0 ; i<500; i++) {
        calcNum = calcNum % 2 === 0 ? calcNum /2 : calcNum*3 +1 
        if (calcNum === 1) {
            x= i+1 // 몇 번째인지 라고 물어봤으니 0부터 세면 안 되지 ㅠ
            break
        }}
        return x === 0 ? -1 : x
    }
}


// 개선할 점 
// 1. 조건에 대해서 조금 약학 것 같다. 강력한 효율을 생각하지 못 하는 듯
// 2. 반복문에서의 ++ 에 너무 약하다.
// function solution(num,x=0) {
//     while (num!==1 && x <500) {
//         num = num % 2 === 0 ? num /2 : num*3 +1 
//     x++ 
//     }
//     return num === 1 ? x : -1
// }