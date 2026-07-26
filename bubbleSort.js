function bubbleSort(arrNumber){
    for (let i = 0; i < arrNumber.length - 1; i++){
        for (let j = 0; j < arrNumber.length - 1 - i; j++){
            if(arrNumber[j] > arrNumber[j+1]){
                let temp = arrNumber[j];
                arrNumber[j] = arrNumber[j+1];
                arrNumber[j+1] = temp;
            }
        }
    }
    return arrNumber;
}

let numbers = [5,3,8,1,7]

console.log(bubbleSort(numbers))
