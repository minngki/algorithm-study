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