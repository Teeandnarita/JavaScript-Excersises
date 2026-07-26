function insertionSort(arrNumber){
    for (let i = 1;i < arrNumber.length; i++){
        let key = arrNumber[i]
        let j = i - 1;
        
        while(j >= 0 && arrNumber[j]>key){
            arrNumber[j+1] = arrNumber[j];
            j--;
        }
        arrNumber[j+1] = key;
    }
    return arrNumber;
}

let numbers = [8,2,1,4,6,3,5]

console.log(insertionSort(numbers))
