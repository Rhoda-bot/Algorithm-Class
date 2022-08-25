const secondMaxNum = array =>{
    // let maxNum = array[5];
    // let firstIndex = 0;
    // let lastIndex = array.length -1;
    // let middleIndex = Math.floor(( firstIndex + lastIndex)/2);
    // let secondMaxiNum = array[middleIndex];
    // return secondMaxiNum;
    let maxNum = 0;
    let secondMax = 0;
    let secondArr = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (maxNum < element) {
            maxNum = element;
        }
        
    }
    for (let x = 1; x < array.length; x++) {
        if (array[x] < maxNum) {
         let a =  maxNum - array[x];
         secondArr.push(a);
        }
       
    }
    for (let j = 1; j < secondArr.length; j++) {
        const element = array[j];
        if (secondMax < element) {
            secondMax = element
        }
        
    }
    return {maxNum,secondMax};
}
console.log(secondMaxNum([3, 9, 13, 24, 2, 47, 17, 50, 50, 89, 30, 89]));
