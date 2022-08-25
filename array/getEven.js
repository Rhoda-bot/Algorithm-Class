

function nums(arr) {
    let newArr = [];

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element % 2 == 0) {
            newArr.push(element);
            
        }
    }
    return newArr;
}

console.log(nums( [ 3, 9, 10, 6, 14, 17, 33]));