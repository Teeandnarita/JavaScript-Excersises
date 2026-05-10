let numberlist = [1, 2, 3, 4]
let reverse = []

for (let number of numberlist) {
  reverse.unshift(number);
}

console.log(reverse)
