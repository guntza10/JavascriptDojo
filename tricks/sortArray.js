var list = [1, 45, 64, -10, 4, 56, 21, -1];
let students = [
    { name: "Chris", score: 68 },
    { name: "Metin", score: 91 },
    { name: "John", score: 30 },
    { name: "Brendan", score: 52 },
    { name: "Mateo", score: 82 },
];

let t = list.sort((a, b) => b - a);
console.log(list);

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
  sort(compareFunction) => sort((a,b))
  => a มากกว่า b
    -> a - b  => return + (จะเรียงจากน้อยไปมาก)
    -> b - a  => return - (จะเรียงจากมากไปน้อย)
Note :
 -> sort() => โดย default จะเรียงตัวอักษร,ตัวเลขให้จากน้อยไปมาก (ยกเว้นเลขที่ติดลบ)
 -> reverse() => โดย default จะเรียงตัวอักษร,ตัวเลขให้จากมากไปน้อย (ยกเว้นเลขที่ติดลบ)
 */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort