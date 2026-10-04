let num_win = prompt("Enter Number Of Wins To Win: ")
let p1score = 0
let p2score = 0

while(p1score != num_win && p2score != num_win){
  round = prompt("Play: ")
  if (round == "R P"){
    p2score += 1
  } else if (round == "P R"){
    p1score += 1
  } else if (round == "R S"){
    p1score += 1
  } else if (round == "S R"){
    p2score += 1
  } else if (round == "P S"){
    p2score += 1
  } else if (round == "S P"){
    p1score += 1
  } else{
    console.log("Error")
  }
  console.log(p1score)
  console.log(p2score)
  
}
if (p1score > p2score){
    console.log("Player 1 Wins")
  } else if (p2score > p1score){
    console.log("Player 2 Wins")
  } else if ("p1score == p2score"){
    console.log("Tie")
  }
