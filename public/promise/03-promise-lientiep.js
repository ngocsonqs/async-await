let add = ( num1, num2 ) => {
    return new Promise( (resolve, reject) => {
        if ( typeof num1 != 'number' || typeof num2 != 'number') {
            return reject( new Error("Tham số truyền vào phải là kiểu số"));
        }
        return resolve( num1 + num2 );
    });
};

// thực thi 4 + 5 + 6 = 15
add("4", 5)
    .then( result => add(result, 6) )
    .then( result => console.log(result) )
    .catch( err => console.log( err + ""));
