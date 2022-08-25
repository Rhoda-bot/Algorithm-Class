function binarySearch(array, element) {
    let firstIndex = 0;
    let lastIndex = array.length - 1;
    let middleIndex = Math.floor((firstIndex + lastIndex) / 2);
    
    while (array[middleIndex] !== element && firstIndex <= lastIndex) {
        if(array[middleIndex] > element) {
            lastIndex = middleIndex - 1;
            console.log(array[middleIndex]);
            }else {
                firstIndex = middleIndex + 1;
              
        }
        middleIndex = Math.floor((firstIndex + lastIndex) / 2);
    }
    // console.log(middleIndex);
    return array[middleIndex] === element ? middleIndex : -1;
}

const array = [2, 3, 6, 8, 10, 12];
binarySearch(array, 10);