const users = [
{name:"Alice", units:120},
{name:"Bob", units:350},
{name:"Charile", units:560}
];

function bill(data){
        if (data < 100) {
        price = data*5
    } else if (data >= 100 && data < 300) {
        price = data*7
    } else if (data >= 300) {
        price = data*10
    } else {
        price = "Invaild"
    }
    console.log(price)
    return price
}

var mean = 0
var max = 0
users.map((item,index)=>{
    if(item.units > max){
        max=item.units
    }
    
    mean += bill(item.units)
    
})
console.log(mean/3)


bill(users[0].units)
console.log("Max = " + max)
