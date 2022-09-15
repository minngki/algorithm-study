function solution(numbers) {
    const sum = (0+9)*10/2
    return sum-numbers.reduce((acc,cur)=> acc+cur)
}