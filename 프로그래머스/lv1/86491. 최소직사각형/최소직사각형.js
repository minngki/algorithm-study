function solution(sizes) {
    sizes.map(x=>x.sort((a,b)=> b-a))
    let width = 0
    let length = 0
    for (let i = 0 ; i<sizes.length; i++) {
        length= Math.max(sizes[i][0],length)
        width= Math.max(sizes[i][1],width)
    }
    return length * width
}