const names = ['Anna', 'Maria', 'Luffy', 'Zolo', 'Mark'];

/* bad code */
// var anna = names[0];
// var maria = names[1];
// var luffy = names[2];

/* use array destructuring */
var [anna, , luffy] = names;
var [, maria,] = names;
// restOp เป็นการเก็บค่า array ที่เหลือ ต้องเอาไว้ตำแหน่งสุดท้ายเท่านั้นมันจึงจะสามารถ get array ที่เหลือทั้งหมดได้
var [, , ...restOp] = names;


console.log(`${anna} ${maria} ${luffy}`);
console.log(`${restOp}`);
console.log(`${restOp.length}`);