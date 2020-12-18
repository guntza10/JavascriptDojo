export default class Animal {

    constructor() {
        console.log("Hello,I'm Animal");
    }

    getClassType() {
        return "Animal";
    }
}

/*
default export
- default export สามารถมีได้แค่ 1 อันเท่านั้นใน module
- ตอน import สามารถเปลี่ยนชื่อได้ ไม่จำเป็นต้องเป็นชื่อเดียวกันกับใน export
*/

/*
- https://javascript.info/import-export
 */