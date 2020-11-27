var person = [
    { name: "gunt", age: 25 },
    { name: "copter", age: 19 },
    { name: "yoda", age: 80 }
]

for (let n of person) {
    console.log(`${n.name} ${n.age}`);
    IsAdult(n.age);
}

function IsAdult(age) {
    // if statement
    if (age >= 20 && age <= 60) {
        console.log("is not adult");
    }
    else if (age < 20) {
        console.log("is adult");
    } else {
        console.log("is old man");
    }
}