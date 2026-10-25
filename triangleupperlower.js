ast = "*"
space = " "
num = 8
number = num - 1
re = 1

function Upper(){
console.log(space.repeat(number) + ast)
for (let i = number - 1; i > 0 ; i--){
    console.log(space.repeat(i) + ast + space.repeat(re) + ast)
    re += 2
}
console.log(ast.repeat((number*2)+1))
}

function Lower(){
console.log(ast.repeat((number*2)+1))
re = 1
  
  for (let i = (number * 2) - 3; i > 0; i -= 2) {
        console.log(space.repeat(re) + ast + space.repeat(i) + ast)
        re += 1 
}
  console.log(space.repeat(number) + ast)
}

Upper()
Lower()
