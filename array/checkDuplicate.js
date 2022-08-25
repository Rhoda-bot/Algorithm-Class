function checkDuplicate( array ) {
    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i];
    //     for (let j = 0; j < array.length; j++) {
    //         const el = array[j];
    //         if (el != element) {
    //             console.log(el, element);
    //         }
            
    //     }
    // }
    let hashed = {};

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (!hashed[element]) {
            hashed[element] = 1;
        }
        else{
            hashed[element] += 1;
        }
        
    }
    for (const key in hashed) {
       if (hashed[key] >= 2) {
            return true;
       }
    }
    // return hashed
}
console.log(checkDuplicate([ 1, 2, 2, 3, 4]));