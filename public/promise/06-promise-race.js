////////////////////////////////////////
// ⓺ PROMSIE RACE
//  + Promise.race(iterrable)
//  + 静的なメソッド
//  + iterable : Arrayのような反複Obj
//  + Ý NGHĨA :
//      + race関最初に渡されたプロミスと同様に解決されたPromiseを返す。
//      + 一番最初に解決もしくは拒否された値のみ返す。
//  + 引数の Promise iterrableの内、1つが成功もしくは失敗した時にすぐに値や理由とともにPromiseを返す。
////////////////////////////////////////

let add = ( (num1, num2) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if ( typeof num1 != 'number' || typeof num2 != 'number') {
                return reject( new Error("TRONG PHÉP NHÂN : Tham số truyền vào phải là kiểu số"));
            }
            return resolve(num1 + num2);
        }, 2000);
    });
});

let multiply = ( (num1, num2) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if ( typeof num1 != 'number' || typeof num2 != 'number') {
                return reject( new Error( "TRONG PHÉP NHÂN : Tham số truyền vào phải là kiểu số"));
            }
            return resolve(num1 * num2);
        }, 1000);
    });
});

Promise.race([add(4,5), multiply(4,5)])
.then( result => console.log(result))
.catch( error => console.log(error + ""));      // KQ: 20 ( vì thời gian xử lý của multiply chỉ có 1s, nên khi multiply trả về thì quả thì sẽ xuất kết quả đó ra)


