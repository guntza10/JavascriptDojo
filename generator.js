/* Generators
เป็น function ที่สามารถ Pause ได้ เป็น function ที่ทำงานแบบ asynchronous
 */

const getNumbers = function* () {
    yield 1;
    yield "hello";
    yield true;
    yield { name: 'Alex' };
    return "I am done";
}

const numberGen = getNumbers();

// console.log(numberGen.next());
// console.log(numberGen.next());
// console.log(numberGen.next());
// console.log(numberGen.next());
// console.log(numberGen.next());
console.log("============================");
console.log(numberGen.next().value);
console.log(numberGen.next().value);
console.log(numberGen.next().value);
console.log(numberGen.next().value);
console.log(numberGen.next().value);

console.log("============================");

const getNumbers2 = function* (numbers) {
    for (let i = 0; i < numbers.length; i++) {
        yield numbers[i]; // yield เป็นตัวเก็บ value ใน generator function เวลาที่มีการเรียกใช้ next มันจะวิ่งมาหา yield ตามลำดับ
    }
}

const getNumberGen = getNumbers2([1, 2, 3, 4, 5]);
const interval = setInterval(() => {
    const next = getNumberGen.next();
    if (next.done) {
        console.log('This generator is done');
        clearInterval(interval);
    } else {
        const number = next.value;
        console.log(`${number}`);
    }
}, 1000);