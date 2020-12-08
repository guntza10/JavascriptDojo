/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 */

// basic string
const stringDoubleQuote = "A string primitive";
const stringSingleQuote = 'Also a string primitive';
const string = `Yet another string primitive ${stringSingleQuote}`;

// charAt
var str = "IronMan";
console.log(str.charAt(0));;
console.log(str[0]);; // property access
/** different chartAt(), property access
- It does not work in Internet Explorer 7 or earlier
- It makes strings look like arrays (but they are not)
- If no character is found, [ ] returns undefined, while charAt() returns an empty string.
- It is read only. str[0] = "A" gives no error (but does not work!)
 */

//  split แปลง string ให้เป็น array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

/* Find,Search String
 indexOf , lastIndexOf หา Index ของ char ใน string
 search จะเหมือนกับ indexOf แต่จะต่างกันตรงที่
 - The search() method cannot take a second start position argument.
 - The indexOf() method cannot take powerful search values(regular expressions).
 */

/* Extracting String Parts
- slice(start, end) 
- substring(start, end)
- substr(start, length)
Note : 
-> slice กับ substring เหมือนกัน ต่างกันตรงที่ slice มันรับ Parameter ติดลบได้(คือไล่ slice จากหลังมา) แต่ substring รับแค่ parameter ที่เป็นบวก
-> substr จะต่างกันตรงที่มันรับ parameter ที่เป็น index start กับ length ที่ต้องการตัดมา แต่ slice กับ substring จะรับ index start ,index end เหมือนกัน
-> substr รับ Parameter ติดลบได้
 */

/* Replacing String Content
แทนที่ string ด้วย string ใหม่
 */
var replaceStr = "Please visit Microsoft!";
var n = replaceStr.replace("Microsoft", "W3Schools");
console.log(n);

/* Converting to Upper and Lower Case
แปลงเป็นตัวพิมพ์เล็ก ตัวพิมพ์ใหญ่
- toUpperCase()
- toLowerCase()
 */

/* Concat เอา string 2 ตัวมาต่อกัน
 */
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);
console.log(text3);

/* trim คือตัด whitespace ออกจาก string
 */
var trimStr = "       Hello World!        ";
console.log(trimStr.trim());

/* padding string
- padstrat(length,value) เอาไปไว้ข้างหน้า
- padEnd(length,value) เอาไปไว้ข้างหลัง
 */
var str5 = "5";
var padStart = str5.padStart(6,1);
console.log(padStart);
var padEnd = str5.padEnd(6,1);
console.log(padEnd);
