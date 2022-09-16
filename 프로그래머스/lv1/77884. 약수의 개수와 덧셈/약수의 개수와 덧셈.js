function solution(left, right) {
    let arr= Array(right-left+1).fill(left).map((x,idx)=>x+idx)
    let sumArr = []
    for (let t of arr) {
        let tempList = []
        for (let i = 1 ; i < t+1 ; i++) {
            t % i ===0 && tempList.push(i)
        }
        sumArr.push(tempList.length)
    }
    
    return sumArr.map((z,idx)=> z%2===0? +arr[idx] : -arr[idx]).reduce((acc,cur)=> acc+=cur,0)
    
}