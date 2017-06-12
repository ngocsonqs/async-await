/**
 * Cộng 2 số
 * @author ngocsonqs
 * @date    2017-06-13
 * @version 1.0
 * @param   {number}   num1     số thứ 1
 * @param   {number}   num2     số thứ 2
 * @param   {Function} callback hàm xử lý khi có lỗi / hoặc có giá trị trả về
 * @return  {number}            trả về giá trị phép cộng khi không có lỗi, trả về error khi có lỗi
 */
let add = ( num1, num2, callback ) => {
    setTimeout( () => {
        if ( typeof num1 != 'number' || typeof num2 != 'number') {
            return callback( new Error("Tham số truyền vào phải là kiểu number"));
        }
        callback( undefined, num1 + num2);
    }, 1000);
}

/**
 * Nhân 2 số
 * @author ngocsonqs
 * @date    2017-06-13
 * @version 1.0
 * @param   {number}   num1     số thứ 1
 * @param   {number}   num2     số thứ 2
 * @param   {Function} callback hàm xử lý khi có lỗi or có giá trị trả về của phép nhân
 * @return  {number}            trả về giá trị phép nhân khi ko có lỗi or trả về error khi có lỗi
 */
let multiply = ( num1, num2, callback ) => {
    setTimeout( () => {
        if ( typeof num1 != 'number' || typeof num2 != 'number') {
            return callback( new Error("Tham số truyền vào phải là kiểu number"));
        }
        callback( undefined, num1 * num2);
    }, 1000);
}

/**
 * Chia 2 sô
 * @author ngocsonqs
 * @date    2017-06-13
 * @version 1.0
 * @param   {number}   num1     số thứ 1
 * @param   {number}   num2     số thứ 2
 * @param   {Function} callback hàm xử lý khi có lỗi or giá trị trả về của phép chia
 * @return  {number}            trả về giá trị phép nhân khi ko có lỗi or trả về error khi có lỗi
 */
let divide = ( num1, num2, callback ) => {
    setTimeout( () => {
        if ( typeof num1 != 'number' || typeof num2 != 'number') {
            return callback( new Error("Tham số truyền vào phải là kiểu number"));
        }
        if ( num2 == 0 ) {
            return callback( new Error('Số bị chia phải khác 0'));
        }
        callback( undefined, num1 / num2);
    }, 1000);
}

/**
 * Kiểm tra có lỗi không thì trả về
 * @author ngocsonqs
 * @date    2017-06-13
 * @version 1.0
 * @param   {obj}   err      Error Obj
 * @param   {Function} callback callback hell
 * @return  {Obj}            Error Obj
 */
let checkErr = (err, callback) => {
    if ( err ) {
        return callback(err);
    }
}

/**
 * tính diện tích hình thang
 * (đáy lớn + đáy nhỏ) * chiểu cao / 2
 * @author ngocsonqs
 * @date    2017-06-13
 * @version 1.0
 * @param   {number}   a        đáy lớn
 * @param   {number}   b        đáy nhỏ
 * @param   {number}   h        chiều cao
 * @param   {Function} callback nếu có err thì xử lý err, nếu không thì xử lý kết quả để trả về
 * @return  {any}            Error Obj || Result kết quả
 */
let tinhDientichHinhThang = ( a, b, h, callback) => {
    add( a, b, ( err, result) => {
        checkErr( err, callback);

        multiply( result, h, ( err, result) => {
            checkErr( err, callback);

            divide( result, 2, ( err, square) => {
                checkErr( err, callback);
                callback( undefined, square);
            });
        });
    });
};

module.exports.tinhDientichHinhThang = tinhDientichHinhThang;
