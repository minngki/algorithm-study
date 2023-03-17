function solution(a, b, n) {
    let have=n
    let earn =0
    while (have>=a) {
        earn +=Math.floor(have/a)*b
        have = Math.floor(have/a)*b + (have%a)
        
        
    }
    return earn
}

// 문제 자체에 대한 이해도가 낮았던 걸까?
// have <-> result
// earn <-> spare 에 대하여,,