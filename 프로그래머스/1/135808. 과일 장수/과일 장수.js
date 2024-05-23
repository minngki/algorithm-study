/*
    for 문의 단위를 제대로 ..
*/
function solution(k, m, score) {
    score.sort((a,b)=>b-a)
    let answer = 0;
    for (let i = 0; i < score.length; i+=m) {
        if (i + m > score.length) {
            break
        }
        const sliced = score.slice(i,i+m) ?? []
        const minScore = sliced.length ? Math.min(...sliced) : 0
        const price = minScore * m
        answer += price
    }
    return answer
}

