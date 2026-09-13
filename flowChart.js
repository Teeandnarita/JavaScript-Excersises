var wholeNum = prompt("Enter Numbers Here a,b,c,d with a space in between them: ")

var a = parseInt(wholeNum.split(" ")[0])
var b = parseInt(wholeNum.split(" ")[1])
var c = parseInt(wholeNum.split(" ")[2])
var d = parseInt(wholeNum.split(" ")[3])


function flowChart(){
  if (a == 1){
    a = b + c + d
    if(b==0){
      return
    }
    else if (b == 1){
      c += c + d
      
    } else if (b == 2){
      c += c -d
      
    } else if (b > 4){
      c += c*d
    } else if (b > 5){
      c += c%d
    } else {
      c += Math.floor(c / d)
    
    }
    console.log(c)
  } else {
    while (b < c){
      b += 1
    if ( b > a){
      break;
    } else {
      c -= 1
    }
    if (a > d){
      break;
    } else {
      a += c
    }
  }
  }
  console.log(a,b,c,d)
}

flowChart()
