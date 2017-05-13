'use strict';
/*
	01. let - var
		■　let : 
			◇　有効範囲：　ブロックスコップでの変数のスコープ (func01)
		■　var : 
			◇　有効範囲：　関数でのスコップ (func02)
 */
var func01 = () => {
	let x = 1;
	console.log(x);
	{
		let x = 2;
		console.log(x);
	}
	console.log(x);
};
func01();	// 1, 2, 1


var func02 = () => {
	var x = 1;
	console.log(x);
	{
		var x = 2;
		console.log(x);
	}
	console.log(x);
};
func02();	// 1, 2, 2