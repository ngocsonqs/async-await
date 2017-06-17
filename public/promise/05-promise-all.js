////////////////////////////////////////
// ⑤ PROMISE - ALL
//  + Nhận vào 1 mảng các hàm để xử lý
//  + Trả về mảng các giá trị mà mỗi hàm truyền vào trong all thực hiện
//  + nếu 1 trong các hàm truyền vào trong mảng bị reject => chỉ trả về ở phẩn catch
////////////////////////////////////////

let add = ( num1, num2 ) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if ( typeof num1 != 'number' || typeof num2 != 'number') {
                return reject( new Error("TRONG PHÉP CỘNG : Giá trị truyền vào phải là kiểu number"))
            }
            return resolve(num1 + num2);
        }, 2000);
    });
}

let multiply = (num1, num2 ) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if ( typeof num1 != 'number' || typeof num2 != 'number') {
                return reject( new Error("TRONG PHÉP NHÂN : Giá trị truyền vào phải là kiểu number"))
            }
            return resolve(num1 * num2);
        }, 1000);
    });
}

Promise.all([add("4",5), multiply(4,"5")])
.then( result => console.log(result))
.catch( error => console.log(error + ""));
