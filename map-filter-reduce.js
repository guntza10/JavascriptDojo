var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// map
var map = list.map((it, index, arr) => {
    console.log('value', it);
    console.log('index', index);
    console.log('arr', arr);
    return it * 10
});
console.log("======================");
console.log("map", map);
console.log("======================");

// filter
var filter = list.filter((it, index, arr) => {
    console.log('value', it);
    console.log('index', index);
    console.log('arr', arr);
    return index % 2 == 0
});

console.log("========================");
console.log("filter", filter);
console.log("========================");

// reduce
var reduce = list.reduce((prev, cur, curIndex, arr) => {
    console.log('previous', prev);
    console.log('current', cur);
    console.log('index', curIndex);
    console.log('arr', arr);
    return prev + cur
});
console.log("reduce", reduce);


