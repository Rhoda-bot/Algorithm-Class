const sumNumbers = (arr) =>{
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        result += element;
    }
    console.log(result);
}

sumNumbers([1,2,3,4]);