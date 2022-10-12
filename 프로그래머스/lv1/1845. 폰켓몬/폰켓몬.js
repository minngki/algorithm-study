function solution(nums) {
    let temp = nums.filter((x,idx)=> nums.indexOf(x)===idx)
    return nums.length /2 < temp.length ? nums.length/2 : temp.length 
}