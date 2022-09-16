function solution(a, b) {
    let newArr =
    Array(Math.abs(a-b)+1).fill(a).map((x,idx)=> a>b ? x-idx : x+idx)
    return a===b ? a : newArr.reduce((acc,cur)=> acc+cur, 0)
}

// 생각은 진짜 했는데 머리의 한계를 느낀 듯.
// ! 짝수와 홀수가 나뉜다면 곱할 때의 수를 2로 나누는 게 나을 수도 있음 , 난 계속 -1 을 생각했음 ㅠ +1/2 를 생각 못함
// function adder(a, b){
//     const result = 0
//     return (a+b)*(Math.abs(b-a)+1)/2;
// }