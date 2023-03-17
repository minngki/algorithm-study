function solution(t, p) {
    const tList = t.split('')
    const pList = p.split('')
    const tLen = tList.length
    const pLen = pList.length
    let cnt = 0
    for (let i = 0; i<tLen;i++) {
        if (tLen-i===pLen-1) {
            break
        }
        let divided = tList.slice(i,pLen+i).join('')
        if (parseInt(divided) <= parseInt(p)) {
            cnt+=1
        }
        
    }
    return cnt
}