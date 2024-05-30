function isPrime(n) {
  if (n <= 1) return false; // 1 이하의 숫자는 소수가 아님
  if (n <= 3) return true;  // 2와 3은 소수
  if (n % 2 === 0 || n % 3 === 0) return false; // 2나 3으로 나누어지는 숫자는 소수가 아님

  for (let i = 5; i * i <= n; i += 6) { // 5부터 n의 제곱근까지 6씩 증가하며 검사
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

function solution(nums) {
    let answer = 0
    for (let i =0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            for (let k=j+1; k<nums.length; k++) {
                const sum = nums[i]+nums[j]+nums[k]
                // const x =(nums[i]+nums[j]+nums[k]+1)%6 이걸로 충분하지 않음 (6k+1)
                // const y = (nums[i]+nums[j]+nums[k]-1)%6 이걸로 충분하지 않음 (6k-1)
                // if (x===0 || y===0) {
                if (isPrime(sum)) {
                    answer+=1
                }
            }
        }
    }
    return answer

}


solution([50,1,2,3,5,6,199])