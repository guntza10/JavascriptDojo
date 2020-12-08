class LedLight {

    constructor(no, status) {
        this._no = no;
        this._status = status;
    }

    get no() {
        return this._no;
    }

    set no(value) {
        this._no = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }
}

// simple way use iteration
var LEDArr = [];
var count = 10;
for (let i = 0; i < count; i++) {
    let no = (i === count - 1) ? "A" : (i + 1).toString();
    LEDArr.push(new LedLight(no, "off"));
}
console.log('LEDArr', LEDArr);

// user Array.from
let LEDArrFrom = Array.from({ length: 10 }, (v, i) => {
    let no = (i === 9) ? "A" : `${i + 1}`;
    return new LedLight(no, "off");
});
console.log('LEDArrFrom', LEDArrFrom);

/* Array.from()
คือ function ในการแปลงอะไรซักอย่างให้เป็น Array เช่น string,object หรือจัดการกับ element ใน Array เพื่อ return array ใหม่ 
หรือสามารถ generate array ตาม Length ได้ด้วย
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 */

// fill คือ function ในการ push ค่า static ลงไปใส่ array
let LedArr = Array(10).fill(new LedLight('', "off"));
console.log(LedArr);
let whiteSpaceGen = Array(10).fill(' ');
console.log(whiteSpaceGen);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
