var person = [
    { name: "gunt", age: 25 },
    { name: "akuma", age: 28 },
    { name: "mari", age: 24 },
    { name: "god", age: 23 }
];

// for loop
for (let i = 0; i < person.length; i++) {
    console.log(person[i].name);
    console.log(person[i].age);
    console.log("===================");
}

// while loop
var count1 = 0;
while (count1 < 5) {
    console.log(`while-${count1}`);
    count1++;
}

// do while loop
var count2 = 5;
do {
    console.log(`dowhile-${count2}`);
    console.log("===================");
    count2++
}
while (count2 < 5);

// break && continute in loop
for (let n of person) {
    console.log(`${n.name} ${n.age}`);
    if (n.age == 24) {
        console.log("age equal 24");
        console.log("break the loop");
        console.log("=====================");
        break;
    }
}

for (let n of person) {
    console.log(`${n.name} ${n.age}`);
    if (n.age > 25) {
        console.log("age more than 25");
        console.log("continue the loop");
        continue;
    }
    console.log("last of each loop");
}