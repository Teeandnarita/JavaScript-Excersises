input = "good morning"
length = 0

function reverse(){
  if(length >= 0){
    console.log(input[length])
    length = length - 1
    reverse()
  }
}

length = input.length - 1
reverse()
