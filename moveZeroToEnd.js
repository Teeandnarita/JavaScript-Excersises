function moveZerosToEnd(arr) {
    const zeroOnly = arr.filter(item => item == 0)
    const zeroFitlered = arr.filter(item => item !== 0)

    return zeroFitlered.concat(zeroOnly)
}
