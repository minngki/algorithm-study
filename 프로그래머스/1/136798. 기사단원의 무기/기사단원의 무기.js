/*
    시간초과 ㅠㅠ
*/
function solution(number, limit, power) {
    let answer = 0;

    for (let n = number; n > 0; n--) {
        let count = 0;
        for (let m = 1; m * m <= n; m++) {
            if (n % m === 0) {
                count++; // m이 약수일 때
                if (m * m !== n) {
                    count++; // n / m이 약수일 때
                }
            }
        }
        answer += count > limit ? power : count;
    }

    return answer;
}

/* 1 번째 시도
function solution(number, limit, power) {
    const newArr = []
    while (number) { 
        let count = 0
        let measure = 1
        while (measure <= number) {
            if (number % measure ===0) {
                count++       
            }
            measure++
        }
        newArr.push(count)
        number--
    }
    let answer = 0
    for (let num of newArr) {
        answer += num > limit ? power : num
    }
    return answer   
}
*/


/* 2 번째 시도
function solution(number, limit, power) {
    let answer = 0
    while (number) { 
        let count = 0
        let measure = 1
        while (measure <= number) {
            if (number % measure ===0) {
                count++       
            }
            measure++
        }
        answer += count > limit ? power: count
        number--
    }
    
    return answer   
}
*/

/* 3번째 시도 (while보다는 for문 속도가 훨씬 빨라서 아까보다는 낫지만 여전히 시간초과.)
function solution(number, limit, power) {
    let answer = 0
    for (let n = number; n>0; n-- ) {
        let count = 0
        for (let m=1; m<=n; m++){
            if (n % m ===0) {
                count++       
            }
        }
        answer += count > limit ? power: count
    }
    return answer   
}
*/
