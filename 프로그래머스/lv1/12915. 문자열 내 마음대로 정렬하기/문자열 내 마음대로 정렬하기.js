function solution(strings, n) {
    strings.sort((a,b)=> {
        if (a.at(n)<b.at(n)) {
            return -1
        }
        if (a.at(n)===b.at(n)) {
            if (a<b){
            return -1
            } else {
            return 0
            }
        }
        return 1
    })
    
    return strings
}