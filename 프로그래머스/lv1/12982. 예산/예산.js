function solution(d, budget) {
  d.sort((a, b) => a - b);
  let num = 0;
  let answer = 0;
  let arr = [];
  for (let i = 0; i < d.length; i++) {
    num += d[i];
    if (num <= budget) {
      answer++;
      arr.push(d[i]);
      console.log(arr);
    } else {
      console.log('break?: ', answer);
      break;
    }
  }
  return answer;
}

console.log(solution([1, 8, 9, 10], 27));
// ! 개선점 : 걍 문제 자체를 제대로 이해하지 못했음. 머리가 안 돌아가서 지금도 제대로 이해 못하는듯 진짜 멍청한데. 문제 자체를 이해 못해서 제대로 코딩을 못 하는듯
// 코드를 몰라서가 아니라 걍 말귀를 못 알아듣는다니 너무 속상해

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
