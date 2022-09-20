function solution(price, money, cnt) {
    let sum = (price + price*cnt)*cnt / 2
    return sum > money ? sum-money : 0
    
    
}