function solution(k, score) {
    const honors = []
    const answer = []
    for (let i = 0; i<score.length; i++){
        if(honors.length > k-1){
            if (honors[k-1] <= score[i]) {
                honors.pop()
            } else {
                answer.push(Math.min(...honors))
                continue
            }
        }
        honors.push(score[i])
        honors.sort((a,b)=>b-a)
        answer.push(Math.min(...honors))
    }
    return answer
}
solution(3,[10,100,20,150,1,100,200])