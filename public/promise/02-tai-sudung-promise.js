///////////////////////////////////
// ※ TÁI SỬ DỤNG PROMISE ※ //
///////////////////////////////////

let fs = require("fs");

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


/**
 * file text
 * @type {String}
 */
const TXT_FILE_PATH = '../txt/hello.txt';

/**
 * hàm đọc file viết bằng promise
 * @author ngocsonqs
 * @date    2017-06-14
 * @version 1.0
 * @param   {obj}   (resolve, reject)       OK -> resolve, err -> reject
 * @return  {obj}             OK -> nội dung trong file truyền vào, err -> Err Object
 */
let readFileWithPromiseCase01 = new Promise( (resolve, reject) => {
    fs.readFile(TXT_FILE_PATH, 'utf8', (err, data) => {
        if ( err ) {
            return reject( err );
        }
        return resolve(data);
    })
});
// thực thi
readFileWithPromiseCase01
    .then(
        data => console.log(data),
        err => console.log(err + "")
    );


/**
 * hàm đọc file viết bằng Promise - cách 2
 * @author ngocsonqs
 * @date    2017-06-15
 * @version 1.0
 * @param   {string}   targetFile đường dẫn đến file cần đọc
 * @return  {string}              OK -> nội dung file cần đọc, ERROR -> trả về error obj
 */
let readFileWithPromiseCase02 = targetFile => {
    return new Promise( (resolve, reject) => {
        fs.readFile( targetFile, 'utf8', (err, data) => {
            if ( err ) {
                return reject( err );
            }
            return resolve(data);
        });
    });
};
// thực thi
readFileWithPromiseCase02(TXT_FILE_PATH)
    .then(
        data => console.log( "Case2 : " + data),
        errMsg => console.log(errMsg + "")
    );
