const arrayOne = ['Marian', 'Anna', 'Alex'];
const arrayTwo = ['Said', 'Ismail', 'Aisha'];

const concatArray = [...arrayOne, ...arrayTwo];
// const concatArray = [arrayOne, arrayTwo];
console.log(concatArray);

concatArray.forEach(function(name) {
    console.log(name);
});

const name = 'Marian';
const nameToArray = [...name];
nameToArray.forEach(function(letter) {
    console.log(letter);
});

const addNumbers = function(n1, n2, n3) {
    return n1 + n2 + n3;
}

const addNumbers2 = function(...numbers) {
    return numbers.reduce((prev, cur) => prev + cur);
};

const numbers = [1, 5, 19];

//const addition = addNumbers(numbers[0], numbers[1], numbers[2]);
const addition1 = addNumbers(...numbers);
const addition2 = addNumbers2(...numbers);

console.log(addition1);
console.log(addition2);

/* Spread Operator Array
คือ มันจะเอาทุก element ใน array ออกมา หรือ ถ้าเอาไปใส่ใน parameter ก็หมายความว่าจะใส่ parameter เข้ามากี่ตัวก็ได้ 
ทุกตัวที่เข้ามาจะกลายเป็น array เดียวกัน
*/