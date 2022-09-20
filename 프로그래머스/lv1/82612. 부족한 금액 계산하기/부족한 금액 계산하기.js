function solution(price, money, cnt) {
    let sum=0
    for (let i = 0 ; i<cnt+1 ; i++){
        sum+=price*i
    }
    return sum > money ? sum-money : 0
}



// 가우스 풀이 ! 등차수열합공식! 유용!! 
// ! (a+l)n / 2
// function solution(price, money, cnt) {
//     let sum = (price + price*cnt)*cnt / 2
//     return sum > money ? sum-money : 0 
// }