gradeinput = prompt("Please Enter Your Grade: ")

if (gradeinput >= 80) {
    grade = "A"
} else if (gradeinput >= 70 && gradeinput < 80) {
    grade = "B"
} else if (gradeinput >= 60 && gradeinput < 70) {
    grade = "C"
} else if (gradeinput >= 50 && gradeinput < 60) {
    grade = "D"
} else {
    grade = "F"
}


console.log(grade)
