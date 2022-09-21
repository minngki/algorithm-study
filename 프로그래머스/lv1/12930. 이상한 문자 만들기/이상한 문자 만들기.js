function solution(s) {
    let str = s.split(' ').map(x=>x.split(''))
    let prs = str.map((x,idx)=>x.map((x,idx)=>idx%2===0? x.toUpperCase() : x.toLowerCase()).join(''))
    return prs.join(' ')
    
    
    
}


// 개선점: filter, map 개념 확실히 하기
// filter & map 공통점 - 구문이 같으며, 원 배열을 복사하여 새로운 배열을 반환한다.


// filter - filter 안은 조건절이 오고 그거에 해당하는 값만 새로운 배열로서 반환하는 것.
// map - 모든 요소 각각에 대해 주어진 함수를 호출한 값을 새로운 배열로서 반환하는 것.

// 즉 조건이 필요할 땐, filter
// 모든 요소를 변경해야할 땐, map


// -> 해당 문제 같은 경우, 모든 요소에 대해 값을 변경해야 하므로 filter가 아닌 map 메서드를 사용해야 한다.