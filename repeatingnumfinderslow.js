var num = [1,2,4,3,5,4,9,7,3,2,4,3,6,4,7] 

var repeatingnum = 0 

for (let i = 0; i < num.length; i++){
  for (let j = i + 1; j < num.length; j++){
    if (num[i] == num[j]) {
      repeatingnum = num[i]
    } 
  } 
} 

console.log(repeatingnum)
