graminput = prompt("Please Enter How Much Your Package Weights In Grams: ")

if (graminput < 100) {
    delivprice = "฿18 "
} else if (graminput >= 100 && graminput < 250) {
    delivprice = "฿22"
} else if (graminput >= 250 && graminput < 500) {
    delivprice = "฿28"
} else if (graminput >= 500 && graminput < 1000) {
    delivprice = "฿38"
} else if (graminput >= 1000 && graminput < 2000) {
    delivprice = "฿58"
} else {
    delivprice = "Cannot Deliver Package Is Too Big/Heavy"
}

console.log(delivprice)
