'use strict';

let dientichHinhThang = ( dayLon, dayNho, height ) => (dayLon + dayNho) * height / 2;

/**
 * TẠO THỬ 1 CALLBACK HELL
 */
let add = ( num01, num02, callback) => {
	setTimeout( () => {
		let err, result;
		if ( typeof num01 != 'number' || typeof num02 != 'number') {
			err = "Tham so phai co kieu number";
			return callback( err, result);
		}
		result = num01 + num02;
		return callback( err, result );
	}, 1000);
};

/**
 * Tạo ra 1 callback hell cho func tính phép cộng ( viết gọn lại so với func trên)
 * @param  {num01 : number}   num01    sô thứ 1
 * @param  {num02 : number}   num02    số thứ 2
 * @param  {Function} callback hàm xử lý khi có err or có giá trị trả về
 * @return {any}            nếu có lỗ -> trả về err, nếu có giá trị -> trả về result
 */
let addCaseRutGon = ( num01, num02, callback ) => {
	setTimeout( () => {
		if ( typeof num01 != 'number' || typeof num02 != 'number') {
			return callback( new Error("Tham so phai la kieu number"));
		}
		callback( undefined, num01 + num02);
	}, 1000);
}

module.exports.dientichHinhThang = dientichHinhThang;
module.exports.phepCong = add;
module.exports.phepCongVietGonHon = addCaseRutGon;

