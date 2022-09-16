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


// 개선점: 나는 데이터쪽으로만 생각해서 항상 array를 씀 , 그치만 수학적ㅇ로 접근하는 게 알고리즘으로서는 좋은 것 같음!
// 사실 크게 다르지는 않은데,, 아니 다름 나는 이중포문이니까 좀 더 비효율적이고, 암튼 그래.
// 약수를 구하는 방법이 여러가지가 있다는 것을 확인! 제곱근이 정수이면 약수의 갯수가 홀수인 것! 맞네......힝구
// function solution(left, right) {
//     var answer = 0;
//     for (let i = left; i <= right; i++) {
//         if (Number.isInteger(Math.sqrt(i))) {
//             answer -= i;
//         } else {
//             answer += i;
//         }
//     }
//     return answer;
// }