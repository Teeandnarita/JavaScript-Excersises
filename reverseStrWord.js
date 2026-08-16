function reverseStr(r){
    console.log(r)
    splited = r.split("")
    console.log(splited)
    h = ""
    for (i = r.length;i>0;i--){
        h += r[i-1]
        console.log(h)
    }
    
}

reverseStr(prompt("input:  "))
