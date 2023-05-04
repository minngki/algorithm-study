function solution(food) {
    let str = ''
    
    for (let idx = 0; idx < food.length; idx++){
        let rep=Math.floor(food[idx]/2)
        let insertStr = idx.toString().repeat(rep*2)
        let index=Math.floor(str.length/2)
        str = str.substring(0,index)+insertStr+str.substring(index)
    }
    const waterIdx = Math.floor(str.length/2)
    const result = str.substring(0,waterIdx)+0+str.substring(waterIdx)
    return result
}