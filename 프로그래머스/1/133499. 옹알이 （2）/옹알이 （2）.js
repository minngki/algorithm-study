function solution(babbling) {
    let answer = 0;
    for (let bab of babbling) {
        if (isValidSequence(bab)) {
            answer += 1;
        }
    }
    return answer;
}

function isValidSequence(input) {
    const pronounce = new Set(['aya', 'ye', 'woo', 'ma']);
    let prevStr = '';
    
    for (let s = 0; s < input.length;) {
        let matched = false;
        for (let pron of pronounce) {
            if (input.startsWith(pron, s)) {
                if (pron === prevStr) {
                    return false;
                }
                prevStr = pron;
                s += pron.length;
                matched = true;
                break;
            }
        }
        if (!matched) {
            return false;
        }
    }
    
    return true;
}
