var numberenter = prompt("EnterNumbers: ")
var split_number = []
var number_list = ["0","1","2","3","4","5","6","7","8","9"]
var list_lostnum = []

split_number = numberenter.split("")

number_list.map((item,index)=>{
    
    if(!(split_number.includes(item))){
        list_lostnum.push(item)
    }
})

console.log(list_lostnum)
