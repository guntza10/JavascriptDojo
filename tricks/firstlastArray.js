
var arr = [10, 2, 3, 4, 5];

var first1 = arr.slice(0, 1).shift();
var first2 = arr.slice(0, 1).pop();
var first3 = [...arr].shift();
var first4 = arr[0];

console.log('first with shift', first1);
console.log('first with pop', first2);
console.log('first with spread op', first3);
console.log('first with []', first4);
console.log("=============================================================================");
//////////////////////////////////////////////////////////////////////////////////////////
var last1 = [...arr].pop();
var last2 = arr[arr.length - 1];
var last3 = arr.slice().pop();

console.log('last with spread op', last1);
console.log('last with []', last2);
console.log('last with pop', last3);

console.log('arr', arr);