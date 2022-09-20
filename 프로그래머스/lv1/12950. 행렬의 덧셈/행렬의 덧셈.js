function solution(arr1, arr2) {
    let sumArr = []
    for (let i = 0 ; i< arr1.length; i ++) {
        let tempArr = []
        for (let j = 0 ; j< arr1[i].length; j ++) {
            tempArr.push(arr1[i][j] + arr2[i][j])
        }
        sumArr.push(tempArr)
    }
    return sumArr
}

// 개선점: map을 이용한 풀이 ! 

// function solution(arr1, arr2) {
//     return arr1.map((x,i)=> x.map((y, j)=> y+arr2[i][j]))
// }