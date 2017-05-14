'use strict';

/**
 * 渡した数字は負数か整数の判定
 * @param  {number : 配列 : any} arr 渡す数字
 * @return {message : String}   整数の場合、"整数"のメッセージ、負数の場合、"負数"のメッセージ
 */
let isNegativeOrPositiveNumber =  number  => {
	if ( number > 0 ) {
		return () => console.log("整数");
	}
	return () => console.log("負数");
};
module.exports.isNegativeOrPositiveNumber = isNegativeOrPositiveNumber;