const arr = [2,3,7,0,8,4,7,9,1,3,0,0,4,5,0]

function moveZerosToEnd(arr) {
    const zeroOnly = arr.filter(item => item == 0)
    const zeroFitlered = arr.filter(item => item !== 0)

    return zeroFitlered.concat(zeroOnly)
}
