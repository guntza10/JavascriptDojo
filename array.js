var names = ["alex", "maria", "sam", "gunt"];
console.log(names);

console.log(names[3]);
console.log(names.length);

// loop for array
for (var n of names) {
    console.log(n);
}

names.forEach((it, index) => {
    console.log(`${index} - ${it}`);
});

let arr = ['el1', 'el2', 'el3'];

// arr.addedProp = 'arrProp';
arr.push('arrProp');

// elKey are the property keys
for (let elKey in arr) {
    console.log(elKey);
}
console.log("===============================");
// elValue are the property values
for (let elValue of arr) {
    console.log(elValue)
}

console.log(arr);