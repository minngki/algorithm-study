function solution(n, arr1, arr2) {
    const map1 = arr1.map(x=> x.toString(2).split('').map(y=> parseInt(y)))
    const map2 = arr2.map(x=> x.toString(2).split('').map(y=> parseInt(y)))
    let decrypt =[]
    for (let i = 0 ; i < n ; i++) {
        while (map1[i].length < n){
            map1[i].unshift(0)
        }
        while (map2[i].length < n){
            map2[i].unshift(0)
        }
        
        decrypt.push(map1[i].map((x,idx)=> x+map2[i][idx] === 0 ? ' ' : '#').join(''))

    }
    return decrypt
}

// 개선점: 논리연산자 사용과 배열 변환을 하지 않고 string으로 충분히 할 수 있었다.
// function solution2(n,arr1,arr2) {
//     return arr1.map((x,idx)=> (x|arr2[i]).toString(2).padStart(n,'0').replace(/1/g,'#').replace(/0/g,' '))
// }