function solution(numbers) {
    let ans = []
    for ( let i = 0 ; i<numbers.length; i++) {
        for ( let j = i+1 ; j<numbers.length; j++) {
            let num = numbers[i] + numbers[j]
            ans.push(num)
        }
    }
    
    return (ans.filter((x,i)=> ans.indexOf(x)===i).sort((a,b)=>a-b))
}