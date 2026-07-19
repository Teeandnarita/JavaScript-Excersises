var scores = [45,60,72,80,95]
var indexOf = 0
var times = 0
var score = 0

for (let i = 0; i < scores.length; i++){
    for (let j = 0; j < scores.length; j++){
        if (scores[j] == 72){
            score = scores[j]
            indexOf = j
            times = j + 1
        }
    }
}

console.log(score)
console.log(indexOf)
console.log(times)
