/*
    문제를 제대로 파악하지 못 함!
    처음 이해한 바로는, 두 카드 뭉치의 단어 내용을 모른다는 전제라고 생각했음.
    두 카드 뭉치의 내용을 알고 있기 때문에 원하는 goal 문자열대로 순서에 맞게 조합만 할 수 있으면 됨.
    즉, 기준은 카드 뭉치가 아니고 goal 문자열임.
*/
function solution(cards1, cards2, goal) {   
    let count = 0
    for (let word of goal) {
        if (cards1[0] === word) {
            cards1.shift()
            count++
        } else if (cards2[0] === word) {
            cards2.shift()
            count++
        } else {
            return 'No'
        }
    }
    return goal.length === count ? 'Yes' : 'No'
}

solution(	["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"])