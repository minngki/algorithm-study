function solution(arr) {
    const min = Math.min.apply(null, arr)
    return arr.length === 1 ? [-1] : arr.filter(num => num!==min)
}