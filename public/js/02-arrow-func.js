'use strict';
/**
 * 配列の全て要素を表示する
 * @param  {arr} arr 配列
 * @return {void}     リターンなし
 */
function printAll( arr ) {
	/*
		+ hàm có 1 tham số truyền vào -> bỏ dấu ()
		+ thân hàm có 1 dòng xử lý -> bỏ dấu {}
	 */
	arr.forEach( elem => console.log(elem));
}

function createNewArrFromOriginalArrCase01( arr ) {
	return arr.map( elem => elem * 2);
}

let intArr = [4, 5, 6, 3, 7, 1];
var createNewArrFromOriginalArrCase02 = intArr.map( elm => elm * 2);

module.exports.printAll = printAll;
module.exports.createNewArrFromOriginalArrCase01 = createNewArrFromOriginalArrCase01;
module.exports.createNewArrFromOriginalArrCase02 = createNewArrFromOriginalArrCase02;