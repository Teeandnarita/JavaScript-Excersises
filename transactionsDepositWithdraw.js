const transactions = [
    {type: "deposit", amount: 5000},
    {type: "withdraw", amount: 1200},
    {type: "deposit", amount: 3000},
    {type: "withdraw", amount: 800},
    {type: "deposit", amount: 2500},
    {type: "withdraw", amount: 2000}]
    
var totalamount = 0
var totaldeposit = 0
var totalwithdraw = 0

transactions.map((item,index) => { 
    if (item.type == "deposit") {
        totalamount += item.amount
    } else if (item.type == "withdraw") {
        totalamount -= item.amount
    }
})
transactions.map((item,index) => { 
    if (item.type == "deposit") {
        totaldeposit += item.amount
    } else if (item.type == "withdraw") {
        totaldeposit + 0
    }
})
transactions.map((item,index) => { 
    if (item.type == "withdraw") {
        totalwithdraw += item.amount
    } else if (item.type == "deposit") {
        totalwithdraw + 0
    }
})

console.log("Total Amount = " + totalamount)
console.log("Total Deposited = " + totaldeposit)
console.log("Total Withdrawed = " + totalwithdraw)
