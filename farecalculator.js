function calculatefare(distance){
    var price = 30
    if (distance > 5){
        overdistance = distance - 5
        console.log(price + overdistance*7)
    }else {
        console.log(price)
    }
}

calculatefare(8)
