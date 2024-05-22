function solution(name, yearning, photo) {
    const answer = []
    for (let row of photo){
        let total = row.reduce((acc,cur)=> acc + (yearning[name.indexOf(cur)] ?? 0), 0)
        answer.push(total)
    }
    return answer
}

// 새 풀이
function solution(name, yearning, photo) {
    const answer = []
    for (let row of photo){
        let total = row.reduce((acc,cur)=> acc + (yearning[name.indexOf(cur)] ?? 0), 0)
        answer.push(total)
    }
    return answer
}
