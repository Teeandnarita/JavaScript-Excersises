let numberlist = [12, 155, 34, 89, 102, 5, 140, 77, 23, 167, 44, 91, 120, 3, 67, 134, 8, 150, 55, 99]
let max = 0

numberlist.map((item,index)=>{
    if (item > max) {
        max = item;
    }
})

console.log(max);
