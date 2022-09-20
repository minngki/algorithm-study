function solution(price, money, cnt) {
    let sum=0
    for (let i = 0 ; i<cnt+1 ; i++){
        sum+=price*i
    }
    console.log(sum)
    return sum > money ? sum-money : 0
    
    
}