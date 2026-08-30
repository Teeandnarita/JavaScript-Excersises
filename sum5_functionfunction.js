let total = 0

function sum(n){
   if (n < 1){
     return 
   }

   total += n
    
   sum(n-1)
   
   
}
 

sum(5)
console.log(total)
