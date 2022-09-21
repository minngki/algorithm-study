function solution(d, budget) {
    d.sort((a, b) => a - b)
    let num = 0
    let answer = 0
    let arr =[]
    for (let i = 0 ; i < d.length ; i++){
        num += d[i]
        if (num<=budget) {
            answer++
            arr.push(d[i])
            console.log(arr)
        } else {
            console.log('break?: ',answer)
            break
        }
    }
         return answer
}

console.log(solution([1,8,9,10],27))


// d.sort((a,b)=>a-b)
// let lenIdx = 1
// for (let i =0;i<d.length ; i++){
//     let num = d[i]
//     for (let j = 1 ; j < d.length ; j++) {
//         num += d[j]
//         for (let k = j+1 ; k < d.length ; k++) {
//             num += d[k]
//             if (num>budget){
//                 num = d[i]
//                 break
//             }
//         }
//     }
// }

// console.log(Math.max(...maxLen))
// return Math.max(...maxLen)