var namedict = {"item":"price"}
var inputamount = prompt("Input The Amount: ")
var totalAmount = 0

for (var i = 1; i <= inputamount; i++){
  var nameinput = prompt("Enter Item: ")
  var namesplit = nameinput.split(" ")
  namedict[namesplit[0]] = namesplit[1]
}

var outputamount = prompt("Output Amount: ")
for (var g = 1; g <= outputamount; g++){
  var iteminput = prompt("Enter Item: ")
  var itemsplit = iteminput.split(" ")
  totalAmount += parseInt(namedict[itemsplit[0]]) * parseInt(itemsplit[1])
  console.log("Current Amount = " + totalAmount)
}

console.log("Total Amount: "+ totalAmount)
console.log(namedict)
