function solution(arr)
{  
    let newArr =[]
   for (let i = 0 ; i < arr.length ; i++) {
       if (arr[i]!==arr[i+1]) {
           newArr.push(arr[i])
       }
   }
    return newArr
}

// 중복제거 하는 방법 : reduce로도 충분히 가능하다! acc를 잘 활용해보기! 
// ! ㅋㅋ문제 잘못 이해
// arr.filter((x,i)=> arr.indexOf(x)===i)
// arr.reduce((acc,cur)=> arr.includes(cur) ? acc : [...acc,cur] ,[])