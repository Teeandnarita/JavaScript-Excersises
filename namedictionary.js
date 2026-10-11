var namedict = {"fName":"nName"}
var inputamount = prompt("Input The Amount: ")

for (var i = 1; i <= inputamount; i++){
  var nameinput = prompt("Enter: ")
  var namesplit = nameinput.split(" ")
  namedict[namesplit[0]] = namesplit[1]
}

var outputamount = prompt("Output Amount: ")
for (var g = 1; g <= outputamount; g++){
  var firstnameinput = prompt("Enter Firstname: ")
  console.log(namedict[firstnameinput])
}


console.log(namedict)
