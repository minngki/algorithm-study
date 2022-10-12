function solution(a, b) {
    const day = ['FRI','SAT','SUN','MON','TUE','WED','THU']
    const date = [31,29,31,30,31,30,31,31,30,31,30,31]
    let firstDay = date.reduce((acc,cur,idx)=> idx<a ? acc += cur : acc+= 0 )

    let ans = (b+firstDay-1)%day.length
    console.log("firstDay: ",firstDay, " ans: ", ans)
    return day[ans+4]

}


//     while (firstDay>6) {
//         firstDay = parseInt(firstDay/day.length)
//     }
// //     while (temp>6){
// //         temp = parseInt((firstDay+b-1)/day.length)
        
// //     }
//     console.log("a: ",a, " first :",firstDay+4)
//     // console.log(day[temp])
//     // return day[temp]

// 따로 하려니까 어려웠던 듯