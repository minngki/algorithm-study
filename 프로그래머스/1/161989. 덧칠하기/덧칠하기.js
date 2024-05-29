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

/** 아래 내용 뭔말인지 하나도 모르겠음. **/ 
function solution(n, m, section) {
  let answer = 0;

  // 현재까지 칠한 구역
  let part = 0;

  // section을 forEach() 메서드로 하나씩 확인한다.
  section.forEach((n) => {

    // 현재 구역이 현재까지 칠한 구역보다 크다면
    if (n > part) {

      // 구역을 칠해주고 현재까지 칠한 구역을 업데이트 시켜준다.
      part = n + m - 1;

      // 페인트를 칠했으니 1증가 시킨다.
      answer++;
    }
  });

  return answer;
}
