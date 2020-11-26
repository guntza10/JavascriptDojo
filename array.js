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