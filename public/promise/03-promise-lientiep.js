/**
 * tính phép cộng
 * @author ngocsonqs
 * @date    2017-06-16
 * @version 1.0
 * @param   {number}   num1 số thứ nhất
 * @param   {number}   num2 số thứ hai
 * @return  {number}        kết quả của phép cộng khi ko có lỗi xảy ra. Error Obj nếu có lỗi xảy ra
 */
let add = ( num1, num2 ) => {
    return new Promise( (resolve, reject) => {
        if ( typeof num1 != 'number' || typeof num2 != 'number') {
            return reject( new Error("Tham số truyền vào phải là kiểu số"));
        }
        return resolve( num1 + num2 );
    });
};

// thực thi 4 + 5 + 6 = 15
add(4, 5)
    .then( result => add(result, 6) )
    .then( result => console.log(result) )
    .catch( err => console.log( err + ""));

//-----------------------------------------------------//

/**
 * Tính phép tính dựa vào giá trị và phép tính(+, -, *, /) mà người dùng truyền vào cho tham số
 * @author ngocsonqs
 * @date    2017-06-17
 * @version 1.0
 * @param   {number}   num1     số thứ 1
 * @param   {number}   num2     số thứ 2
 * @param   {String}   operator phép tính
 * @return  {Obj}            trả về giá trị nếu là resolve, nếu reject thì trả về Error
 */
let doCalculate = ( num1, num2, operator ) => {
    return new Promise( (resolve, reject) => {
        if ( typeof num1 != 'number' || typeof num2 != 'number') {
            return reject( new Error("Tham số truyền vào phải là kiểu số"));
        }

        let result = 0;
        switch( operator ) {
            case '+':
            case 'cộng':
            case 'add':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
            case 'x':
            case 'multiply':
                result = num1 * num2;
                break;
            case ':':
            case '/':
            case 'devide':
                if ( num2 === 0 ) {
                    return reject( new Error("Số bị chia phải khác 0"));
                }
                result = num1 / num2;
                break;
            default :
                result = num1 + num2;
                break;
        }
        return resolve(result);
    });
}

/**
 * tính diện tích hình thang
 * @author ngocsonqs
 * @date    2017-06-17
 * @version 1.0
 * @param   {number}   a đáy nhỏ
 * @param   {number}   b đáy lớn
 * @param   {number}   h chiều cao
 * @return  {Obj}     trả về kết quả nếu resolve ( S = (a + b) * h / 2), trả về Error Object nếu là reject
 */
let CalcSquareHinhThang = ( a, b, h ) => {
    doCalculate(a, b, "+")
        .then( resultAdd => doCalculate( resultAdd, h, "*"))
        .then( resultMultiply => doCalculate( resultMultiply, 2, "/"))
        .then( resultSquare => console.log("Kết quả diện tích hình thang : ", resultSquare))
        .catch( err => console.log( err + "" ))
}
CalcSquareHinhThang(4, 6, 5);   // = 25
