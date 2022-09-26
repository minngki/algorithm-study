function solution(n, arr1, arr2) {
    const newArr = Array(n).fill(0)
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
