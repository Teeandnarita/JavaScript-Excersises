input = prompt("Enter Number ex:(10 20 30): ")

inputsplit = input.split(" ")
final = 0

for (let number in inputsplit){
    final += parseInt(inputsplit[number], 10);
}

console.log(final)
