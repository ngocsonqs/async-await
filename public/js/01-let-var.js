'use strict';
/*
	01. let - var
		■　let : 
			◇　有効範囲：　ブロックスコップでの変数のスコープ (funcLet)
		■　var : 
			◇　有効範囲：　関数でのスコップ (funcVar)
 */
function funcLet() {
	let x = 1;
	console.log(x);
	{
		let x = 2;
		console.log(x);
	}
	console.log(x);
}
// KQ : 1, 2, 1

function funcVar() {
	var x = 1;
	console.log(x);
	{
		var x = 2;
		console.log(x);
	}
	console.log(x);
}
// KQ : 1, 2, 2

module.exports.funcLet = funcLet;
module.exports.funcVar = funcVar;

