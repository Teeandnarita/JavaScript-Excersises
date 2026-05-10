let firstName = ["James", "Robert", "William", "Joseph", "Thomas", "Mary", "Patricia", "Richard", "Edward", "Charles"];
let nickName = ["Jim", "Bob", "Will", "Joe", "Tom", "Molly", "Pat", "Rich", "Ed", "Charlie"];

input = prompt("enter name: ")
inputIndex = 0

if (firstName.includes(input)){
    inputIndex = firstName.indexOf(input)
    console.log(nickName[inputIndex])
} else if (nickName.includes(input)){
    inputIndex = nickName.indexOf(input)
    console.log(firstName[inputIndex])
} else {
    console.log("Not Found")
