function solution(n) {
    let list = []
    for (let i = 1; i<n+1 ; i++) {
        n % i === 0 && list.push(i);
    }
    return (list.reduce((acc, cur)=> acc+cur,0))
}