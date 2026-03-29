inputdate = prompt("Input Date MM/DD/YYYY: ")

montharray = ["zero","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
inputsplit = inputdate.split("/")

console.log(montharray[inputsplit[0]] + " " + inputsplit[1] + ", " + inputsplit[2])
