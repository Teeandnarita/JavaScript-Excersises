ast = "*"
space = " "
num = 3
number = num - 1
re = 1

console.log(space.repeat(number) + ast)

for (let i = number - 1; i > 0 ; i--){
    console.log(space.repeat(i) + ast + space.repeat(re) + ast)
    re += 2
}

console.log(ast.repeat((number*2)+1))
