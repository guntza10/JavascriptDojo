/* Promise
state
- pending : เป็น state เริ่มต้น ยังไม่มีการ success หรือ reject
- fulfilled : เป็น state ที่ success (then)
- rejected : เป็น state ที่ failed (catch)
 */

const promiseResolve = new Promise((resolve, reject) => {
    /* call back function resolve , reject
        ถ้าทำ call back function 
        - resolve เวลาเอา promise ไปใช้มันจะทำ then
        - reject เวลาเอา promise ไปใช้มันจะทำ catch
    */
    setTimeout(() => {
        resolve('data back from the server');
    }, 3000);

    setTimeout(() => {
        reject('no data back form the server, there was an error');
    }, 5000);
});

const promiseReject = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('data back from the server');
    }, 5000);

    setTimeout(() => {
        reject('no data back from the server, there was an error');
    }, 3000);
});


promiseResolve.then(response => {
    console.log('promise resolve');
    console.log(response);
}).catch(err => {
    console.log('promise resolve');
    console.log(err);
});
console.log("=======================================");
promiseReject.then(response => {
    console.log('promise reject');
    console.log(response);
}).catch(err => {
    console.log('promise reject');
    console.log(err);
});