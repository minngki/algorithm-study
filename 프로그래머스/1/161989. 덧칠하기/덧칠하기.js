function solution(n, m, section) {
    let answer = 0;
    for(let i=1; i<n+1; i++){
        if(section.includes(i)){ // i가 index를 가르키기 때문에, section에 해당 index가 존재한다면 칠해야하는 것을 의미.
            answer += 1 
            i = i +m-1 // 칠하고나면, m 크기 만큼 뛰어넘어서 칠해야하므로 i를 다시 set한다.
            continue;
        }
    }
    return answer;
}