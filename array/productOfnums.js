let newArr = [];
// function integerNums(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       let result = 1;
//       for (let x = 0; x < arr.length; x++) {
//            if (arr[i] !== arr[x]) {
//             result *= arr[x]
//            }
//         }
//         newArr.push(result);
//     }
//     console.log(newArr);
// }
// integerNums([1, 2, 3, 4]);


function productNum(array) {
    let res = 1;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        res *=element;
    }
    for (let n = 0; n < array.length; n++) {
        let a = res/array[n];
        newArr.push(a);
        
    }
    console.log(newArr);
}

productNum([1, 2, 3, 4])