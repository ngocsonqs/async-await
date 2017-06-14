////////////////////////////////////
// ①． khởi tạo đối tượng Promise //
///////////////////////////////////
let pr = new Promise( () => console.log( "Hello Promise"));


//////////////////////////////////////////////////////
// ②． khởi tạo đối tượng Promise　có truyền tham số //
//////////////////////////////////////////////////////
let pr2 = new Promise( ( resolve, reject ) => console.log("Hello Promise"));


//////////////////////////////////////////////////////
// ③． ví dụ về resolve( xử lý thành công) //
//////////////////////////////////////////////////////
let pr3 = new Promise( (resolve, reject) => {
    resolve("success");
});
pr3.then( (value) => console.log("Trạng thái ", value));


//////////////////////////////////////////////////////
// ④． ví dụ về reject( có lỗi xảy ra)              //
//////////////////////////////////////////////////////
let pr4 = new Promise( (resolve, reject) => {
    reject( new Error("Fail"));
});
pr4.then(
    // TRƯỜNG HỢP resolve(thành công) thì sẽ chạy câu lệnh này
    (msg) => console.log("Trạng thái ", msg),

    // TRƯỜNG HỢP reject(có lỗi) thì sẽ chạy câu lệnh này
    (err) => console.log("Trạng thái ", err + "")
);

/////////////////////////////////////////////
// ⑤.  vì promise chỉ hay sử dụng trong code bất đồng bộ,
//      nếu code đồng bộ thì ta chỉ cần if...else là OK.
//      nên ta sẽ thử viết 1 đoạn code bất đồng bộ như sau
/////////////////////////////////////////////
let pr5 = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve("Success");
    }, 2000)
}).then(
    successStatusMsg => console.log("STATUS : ", successStatusMsg),
    failStatusMsg => console.log("STATUS : ", failStatusMsg)
);
