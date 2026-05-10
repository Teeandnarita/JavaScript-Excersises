let numberlist = [1,1,2,2,3,4,4,5,5,5,6,6,6,7]
let fixednumberlist = []

numberlist.map((item,index)=>{
    if(!fixednumberlist.includes(item)){
        fixednumberlist.push(item)
    }
})

console.log(fixednumberlist)
