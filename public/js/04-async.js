'use strict';
/*
	◆ ĐỒNG BỘ là gì?
		+ là luồng xử lý của nó sẽ chạy từ trên chạy xuống, từ trái qua phải
		+ khi hành động xử lý của 1 xong thì mới đến 2

	◆ BẤT ĐỒNG BỘ là gì?
		+ là trong chương trình nhiều hành động được thực thi cùng 1 lúc
		+ không nhất thiết câu lệnh này phải xong mới đến câu lệnh tiếp theo
 */

// ví dụ xử lý bất đồng bộ
/*let examBatDongBo = setTimeout( () => {
	console.log("1秒");
}, 1000);
console.log("終わり");
module.exports.setTimeOut = examBatDongBo;*/
// KQ : "終わり", "1秒"


/*
	Trong nodejs để đọc file text ta có 2 hàm xử lý nhưng 1 câu lệnh là đồng bộ, 1 câu lệnh là bất đồng bộ
		+ readFile( file[, option], callback) : 
			+ câu lệnh bất đồng bộ
			+ thường thì trong câu lệnh bất đồng bộ sẽ được cung cấp tham số callback để xử lý err or data trả về
		+ readFileSync( file[, option]) : câu lệnh đồng bộ
 */
const fs = require("fs");
const FILE_TXT_PATH = __dirname + "./../txt/hello.txt";
const ENCODING = "utf8";

let readFileByBatDongBo = fs.readFile( FILE_TXT_PATH, ENCODING, (err, data)　=> {
	if ( err ) {
		return console.log("Error : " + err);
	} else {
		console.log("DATA : ", data);
	}
});

let readFileByDongBo = fs.readFileSync( FILE_TXT_PATH, ENCODING );


module.exports.readFileByBatDongBo = readFileByBatDongBo;
module.exports.readFileByDongBo = readFileByDongBo;