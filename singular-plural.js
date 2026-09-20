word = prompt("Enter Word: ")
lengthLast = word[word.length-1] 
lengthBeforeLast = word[word.length-2] 
finalWord = "" 
  
function plural(word){ 
  if (lengthLast == "s" || lengthLast == "x" || lengthLast == "h"){ 
    finalWord = word + "es" } 
  else if (lengthLast == "y" && lengthBeforeLast != "a" &&  
    lengthBeforeLast != "e" && lengthBeforeLast != "i" && 
    lengthBeforeLast != "o" && lengthBeforeLast != "u"){ 
    finalWord = word.slice(0,word.length-1)
    console.log(finalWord)
    console.log(lengthLast)
    finalWord = finalWord + "ies" 
  } else {
    finalWord = word + "s"
  } 
} 


plural(word) 
console.log(finalWord)
