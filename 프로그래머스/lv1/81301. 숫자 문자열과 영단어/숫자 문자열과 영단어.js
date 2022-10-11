function solution(s) {
    numList=['zero','one','two','three','four','five','six','seven','eight','nine']
    let ans = s
    for (let i = 0; i<numList.length ; i++){
        let temp = ans.split(numList[i])
        ans = temp.join(i)
    }
    return parseInt(ans)
    
    // 다른 풀이 1
    // let i =0
    // while (/\D/.test(ans)) {
    //     for (let i =0; i<numList.length; i++){
    //     if (ans.includes(numList[i])) {
    //         ans=ans.split(numList[i]).join(i)
    //     } else {
    //         continue
    //     }
    //     }
    // }
    // return Number(ans)
    // console.log(ans)
    
    // 다른 풀이 2 - 내가 풀었던 방식과 가장 유사
//     let numObj = {
//         "zero" : 0,
//         "one" : 1,
//         "two" : 2,
//         "three" : 3,
//         "four" : 4,
//         "five" : 5,
//         "six" : 6,
//         "seven" : 7,
//         "eight" : 8,
//         "nine" : 9,
//     }

//     for(let [key, value] of Object.entries(numObj)) {
//         let re = new RegExp(`${key}`,"g"); // 차라리 새롭게 class 만들어서 하는 게 효율적이었음
//         s = s.replace(re, value);
//     }
//     return parseInt(s)

}

// 못 풀었음
// list를 Index대로 만드는 것이 중요
// 아 왜이렇게 삽질하지..