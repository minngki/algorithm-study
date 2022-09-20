function solution(n, m) {
    let num = 0
    let tempN = 0
    let tempM = 0
    for (let i = 0 ; i <10000000 ; i++){
        if (n%i===0 && m%i===0) {
            num = i
            tempN = n/num
            tempM = m/num
            if(m<i && n<i){           
                break
            }
        }
    }
    return [num, num*tempN*tempM]
}

console.log(solution(300,250))