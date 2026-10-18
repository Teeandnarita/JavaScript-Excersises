var namedict = {"fName":"nName","John Pork":"081-234-5678","Jane Pork":"099-701-8877","Burn Pork":"093-765-4321"}
var inputamount = prompt("Input The Amount: ")


for (var i = 1; i <= inputamount; i++){
  var nameinput = prompt("Enter: ")
  var namesplit = nameinput.split(" ")
  namedict[namesplit[0]] = namesplit[1]
}

var outputamount = prompt("Output Amount: ")
for (var g = 1; g <= outputamount; g++){
  var firstnameinput = prompt("Enter: ")
if(firstnameinput[0] == "0"){
  const targetValue = firstnameinput
  const key = Object.keys(namedict).find(k => namedict[k] === targetValue)
  console.log(key)
}else {
  console.log(namedict[firstnameinput])
  }
}


console.log(namedict)
