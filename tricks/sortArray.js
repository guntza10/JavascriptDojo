let numbers = [30, 10, -5, 50, 40, 20, -10, 0];
// น้อยไปมาก
numbers.sort((a, b) => {
    if (a < b)
        return -1;
    else if (a > b)
        return 1;
    else
        return 0;
});
console.log("Sorted-Ascending:", numbers);
// มากไปน้อย
numbers.sort((a, b) => {
    if (a < b)
        return 1;
    else if (a > b)
        return -1;
    else
        return 0;
});
console.log("Sorted-Descending:", numbers);

var list = [1, 45, 64, -10, 4, 56, 21, -1];
let students = [
    { name: "Chris", score: 68 },
    { name: "Metin", score: 91 },
    { name: "John", score: 30 },
    { name: "Brendan", score: 52 },
    { name: "Mateo", score: 82 },
];

let ascendingSort = list.sort((a, b) => a - b);
console.log('ascendingSort ', ascendingSort);
let descendingSort = list.sort((a, b) => b - a);
console.log('descendingSort ', descendingSort);

// sort by valueF
students.sort((a, b) => b.score - a.score);
console.log(students);

// sort by name
students.sort((a, b) => {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    // names must be equal
    return 0;
});

console.log(students);

/*
basic sort function
1. เรียงจากน้อยไปมาก compareFunction (a,b)
- a < b => return -1 แล้วย้าย a มาทางซ้ายของ b (เลื่อน a มาไว้หน้า b)
- a > b => return 1 แล้วย้าย a มาทางขวาของ b (เลื่อน a มาไว้หลัง b)
- return 0 => ไม่มีการสลับตำแหน่ง

2. เรียงจากมากไปน้อย compareFunction (a,b) [สลับกับข้อ 1]
- a < b => return 1 แล้วย้าย a มาทางขวาของ b (เลื่อน a มาไว้หลัง b)
- a > b => return -1 แล้วย้าย a มาทางซ้ายของ b (เลื่อน a มาไว้หน้า b)
- return 0 => ไม่มีการสลับตำแหน่ง

Note : (a,b) => 1   (a อยู่หลัง b)
       (a,b) => -1  (a อยู่หน้า b)
 */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  sort(compareFunction) => sort((a,b)) [ใช้ arrow function เขียนแบบย่อ] *** เหมาะกับการ sort พวกที่เป็นตัวเลข
  => a มากกว่า b
    -> a - b  => return + (จะเรียงจากน้อยไปมาก)
    -> b - a  => return - (จะเรียงจากมากไปน้อย)
Note :
 -> sort() => โดย default จะเรียงตัวอักษร,ตัวเลขให้จากน้อยไปมาก (ยกเว้นเลขที่ติดลบ)
 -> reverse() => โดย default จะเรียงตัวอักษร,ตัวเลขให้จากมากไปน้อย (ยกเว้นเลขที่ติดลบ)
 */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// http://marcuscode.com/lang/javascript/sorting-arrays

/*
Example Code
 */
var listString = ['without', 'hello', 'bag', 'world'];
listString.sort();
console.log('defalut sort', listString);
listString.reverse();
console.log('defalut reverse', listString);
console.log('====================================================');

listString.sort((a, b) => {
    if (a < b)
        return -1;
    else if (a > b)
        return 1;
    else
        return 0;
});
console.log('compare function sort ascending', listString);
listString.sort((a, b) => {
    if (a < b)
        return 1;
    else if (a > b)
        return -1;
    else
        return 0;
});
console.log('compare function sort descending', listString)
console.log('====================================================');


var list = [1, 45, 64, -10, 4, 56, 21, -1];
let t1 = list.sort((a, b) => a - b);
console.log('arrow function short ascending(for value type number)', t1);
let t2 = list.sort((a, b) => b - a);
console.log('arrow function short descending(for value type number)', t2);

let students = [
    { name: "Chris", score: 68 },
    { name: "Metin", score: 91 },
    { name: "John", score: 30 },
    { name: "Brendan", score: 52 },
    { name: "Mateo", score: 82 },
];
students.sort((a, b) => a.score - b.score);
console.log('arrow function sort ascending score', students);
students.sort((a, b) => b.score - a.score);
console.log('arrow function sort descending score', students);
console.log("====================================================");
students.sort((a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB)
        return -1;
    else if (nameA > nameB)
        return 1;
    else
        return 0;
});
console.log('compare function sort ascending name', students);
students.sort((a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB)
        return 1;
    else if (nameA > nameB)
        return -1;
    else
        return 0;
});
console.log('compare function sort descending name', students);
console.log("====================================================");
students.sort((a, b) => {
    if (a.score < b.score)
        return -1;
    else if (a.score > b.score)
        return 1;
    else
        return 0;
});
console.log('compare function sort ascending score', students);
students.sort((a, b) => {
    if (a.score < b.score)
        return 1;
    else if (a.score > b.score)
        return -1;
    else
        return 0;
});
console.log('compare function sort descending score', students);