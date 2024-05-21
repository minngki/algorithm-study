function solution(s) {
    const s_arr = s.split('')
    const answer = []
    s_arr.forEach((x,index) => {
        const comp = s_arr.slice(0,index)
        const reversed = [...comp].reverse()
        const findedIdx  = comp.findIndex(y=>x===y) > -1 ? reversed.findIndex(y=>x===y)+1 : -1
        answer.push(findedIdx)
    })
    return answer;
}

