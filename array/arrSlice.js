function arraySlic(arr, firstIndex, lastIndex) {
    let newArr = [];
    // return arr.slice(firstIndex, lastIndex)
    // if (lastIndex > arr.length || lastIndex == 0) {
    //     return []
    // }
    for (let i = firstIndex; i < lastIndex; i++) {
        const element = arr[i];
         newArr.push(element);
    }
    return newArr;
}
console.log(arraySlic([ 1, 2, 3, 4, 5], 1, 3));