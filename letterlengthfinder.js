let input = "AAAAAAABBBBBBBCCCCCCCCCC"
let a=0
let b=0
let c=0


for (let i = 0;i < input.length; i++){
  console.log(input[i])
  if(input[i] == "A"){
      a++
  } else if(input[i] == "B"){
      b++
  } else if(input[i] == "C"){
      c++
  }
}
console.log(a)
console.log(b)
console.log(c)

console.log("A: " + a + " B: " + b + " C: " + c)
