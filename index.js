'use strict';
/*####  01- let - var  ####*/
/*
const letVar = require("./public/js/01-let-var.js");
letVar.funcLet();
letVar.funcVar();
*/

/*####  02 - arrFunc  ####*/
const arrowFunc = require("./public/js/02-arrow-func.js");
arrowFunc.printAll([4, 5, 6, 3, 7, 1]);
console.log(arrowFunc.createNewArrFromOriginalArrCase01([4, 5, 6, 3, 7, 1]));
console.log(arrowFunc.createNewArrFromOriginalArrCase02);

/*####  03 - function  ####*/
const functionJS = require("./public/js/03-function.js");
functionJS.isNegativeOrPositiveNumber(1)();	// 整数
functionJS.isNegativeOrPositiveNumber(-1)();　// 負数