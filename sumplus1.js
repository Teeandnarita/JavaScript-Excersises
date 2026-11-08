input = 5
add = 1
sum = 0

function run(){
  console.log(add)
  sum += add
  add += 1
  
  if(add == input+1){
    console.log(sum)
    return 0
  }
  
  run()

}

run()
