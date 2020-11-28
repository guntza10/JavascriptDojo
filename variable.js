var name = 'Jomphop Saibuatong';
var nickName = "Gunt";
var age = 25;
var IsHeartBreak = true;
var empty = undefined;

console.log(`name : ${name} => type : ${typeof name}`);
console.log(`nickName : ${nickName} => type : ${typeof nickName}`);
console.log(`age : ${age} => type : ${typeof age}`);
console.log(`IsHeartBreak : ${IsHeartBreak} => type : ${typeof IsHeartBreak}`);
console.log(`empty : ${empty} => type : ${typeof empty}`);

for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log("===========================var");
console.log(i);
console.log("===========================var");
console.log("===========================let");
for (let j = 0; j < 10; j++) {
    console.log(j);
}
// console.log(j);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr = [11, 12, 13, 14, 15]; /* can't re-assign */
arr[0] = 100;
console.log(arr);

/*
var เป็น global variable ประกาศแล้วใช้ได้หมด
let เป็น scope variable ประกาศแล้วใช้ได้แค่ใน statement
const เป็น variable ที่ไม่สามารถ assign ค่าให้ใหม่ได้ แต่สามารถเปลี่ยนแปลงค่าภายในได้
 */
