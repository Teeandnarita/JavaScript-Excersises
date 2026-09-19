var num = [1000, 500, 100, 50, 20,10,5,2,1];
var amount = parseInt(prompt("Enter amount: "))

function withdraw(amount) {
    for (var i = 0; i < num.length; i++) {
        while (amount >= num[i]) {
            console.log(num[i])
            amount -= num[i]
        }
    }
}

withdraw(amount)
