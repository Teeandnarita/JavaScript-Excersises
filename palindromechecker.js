input = "rotator"
length = 0

function check(){
  if(length == 3 || length == 5 || length == 7 || length == 9){
    if(length == 3){
      if(input[0] == input[2]){
        console.log("true")
      }
    }
    if(length == 5){
      if(input[0] == input[4] && input[1] == input[3]){
        console.log("true")
      }
    }
    if(length == 7){
      if(input[0] == input[6] && input[1] == input[5] && input[2] == input[4]){
        console.log("true")
      }
    }
  }
}

length = input.length
console.log("Word: " + input)
check()
