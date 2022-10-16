function solution(number) {
    let sum = 0
    for (let i = 0 ; i < number.length ; i++) {
        for (let j = i+1 ; j < number.length ; j++) {
            for (let k = j+1 ; k < number.length ; k++) {
                number[i]+number[j]+number[k] === 0? sum+=1 : sum+=0
            }    
        }    
    }
    return sum
}

// 틀린 점 : j, k의 변수를 걍 단순하게 각각 1,2 로해서 중복됐음..
// 여태 잘하다가 왜...
