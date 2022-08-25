const arrayProduct = (arr) =>{
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        result *= element;
    }
    console.log(result);
}

arrayProduct([1,2,3,4]);