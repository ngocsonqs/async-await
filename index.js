'use strict';
/*####  01- let - var  ####*/
/*
const letVar = require("./public/js/01-let-var.js");
letVar.funcLet();
letVar.funcVar();
*/

/*####  02 - arrFunc  ####*/
/*const arrowFunc = require("./public/js/02-arrow-func.js");
arrowFunc.printAll([4, 5, 6, 3, 7, 1]);
console.log(arrowFunc.createNewArrFromOriginalArrCase01([4, 5, 6, 3, 7, 1]));
console.log(arrowFunc.createNewArrFromOriginalArrCase02);
*/

/*####  03 - function  ####*/
/*const functionJS = require("./public/js/03-function.js");
functionJS.isNegativeOrPositiveNumber(1)();	// 整数
functionJS.isNegativeOrPositiveNumber(-1)();　// 負数
*/

/*####  04 - async  ####*/
/*const async = require("./public/js/04-async.js");
async.setTimeOut;
async.readFileByBatDongBo;
async.readFileByDongBo;
*/

/*####  05 - callback  ####*/
const callbackFunc = require("./public/js/05-callback.js");
console.log("Diện tích hình thang : " + callbackFunc.dientichHinhThang(2, 3, 2));

callbackFunc.phepCong(4, "5", (err, result) => {
	if (err) return console.log( "ERROR : " + err );
	console.log(result);
});

callbackFunc.phepCongVietGonHon(4, "5", (err, result) => {
	if ( err ) return console.log( err );
	console.log(result); 
})