///////////////////////////////////
// ※ TÁI SỬ DỤNG PROMISE ※ //
///////////////////////////////////

/**
 * tính phép cộng 2 số sử dụng bất đồng bộ trong việc tái sử dụng Promise
 * @author ngocsonqs
 * @date    2017-06-14
 * @version 1.0
 * @param   {number}   num1 số thứ nhất
 * @param   {number}   num2 số thứ hai
 * @return  {number}        kết quả trả về của phép cộng or error obj nếu có lỗi
 */
let add = (num1, num2) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if ( typeof num1 != 'number' || typeof num2 != 'number') {
                return reject( new Error('Tham số truyền vào phải là kiểu số'));
            }
            return resolve(num1 + num2);
        }, 2000);
    });
};
add(2, 3)
    .then(
        result => console.log( "Kết quả của phép cộng = " , result),
        errMsg => console.log(errMsg));
