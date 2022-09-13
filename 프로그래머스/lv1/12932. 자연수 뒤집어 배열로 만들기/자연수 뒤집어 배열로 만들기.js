function solution(n) {
    let tempList = [];
    for (let row of (n+"").split("")) {
        tempList.unshift(Number(row));
    }
    return tempList
}