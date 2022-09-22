function solution(s, n) {
  let str = ''
    for (let i = 97; i <= 122; i++) {
        str+=String.fromCharCode(i)
    }
    str = str.repeat(320)
    let inputArr =s.split('')
    let answer = inputArr.map((x)=> /[A-Z]/.test(x) ? str.toUpperCase().at(str.toUpperCase().search(x)+n) : x!==' '? str.at(str.search(x)+n): ' ').join('')
    
    return answer
    
    
}