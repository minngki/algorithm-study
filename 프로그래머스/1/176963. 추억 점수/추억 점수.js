function solution(name, yearning, photo) {
    const answer = []
    for (let row of photo){
        let total = 0
        for (let x of row) {
            const findIdx = name.findIndex(n=> x===n)
            total += findIdx > -1 ? yearning[findIdx] : 0
        }
        answer.push(total)
    }
    return answer
}
