let square = 5
let piece = "*"

let topdown = (piece + " ").repeat(square)
let mid = piece + " ".repeat(square + 2) + piece

console.log(topdown)
for (let i = 0; i < square - 2; i++) {
    console.log(mid)
}
console.log(topdown)
