const findMaxNum = arrNum => {
    let num = 0
    for (let i = 0; i < arrNum.length; i++) {
        const element = arrNum[i];
        if (num < element) {
            num = element;
        }
        
    }
    console.log(num);

}
// const findMaxNum = array => {
//     let firstIndex = 0;
//     let lastIndex = array.length -1;
//     let result;
//     let middleIndex = (firstIndex + lastIndex) / 2;
 
//      for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element > array[middleIndex]) {
//            result = element
//         }
//     }
//     return result; 
// }
console.log(findMaxNum([3, 9, 13, 24, 2, 47, 17]));
