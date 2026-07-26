function selectionSort(arrNumber){
    for (let i = 0;i < arrNumber.length-1;i++){
        minIndex = i;
        for (let j = i + 1;j < arrNumber.length;j++){
            if (arrNumber[j] < arrNumber[minIndex]){
                minIndex = j;
            }
        }
        let temp = arrNumber[i]
        arrNumber[i] = arrNumber[minIndex]
        arrNumber[minIndex] = temp;
    }
    return arrNumber;
}

let numbers = [5,3,8,1,7]

console.log(selectionSort(numbers))

