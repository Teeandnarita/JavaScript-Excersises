numberinput = prompt("Enter a number: ")

if (numberinput > 0){
    numinteger = "Positive"
} else if (numberinput == 0){
    numinteger = "Zero"
} else if (numberinput < 0){
    numinteger = "Negative"
}

if (numberinput % 2 == 0) {
    numoe = "This is a even number"
  } else {
    numoe = "This is a Odd Number"
  }

console.log(numinteger)
console.log(numoe)
