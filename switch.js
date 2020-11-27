var person = {
    name: "Anna",
    age: 16
}

// swith case with condition
switch (true) {
    case (person.age == 17):
        console.log(person.name + " is about to be an adult");
        break;
    case (person.age >= 18):
        console.log(person.name + " is an adult");
        break;
    default:
        console.log(person.name + "is not an adult");
}

// normal switch case
switch (new Date().getDay()) {
    case 6:
        console.log("Saturday")
        break;
    case 5:
        console.log("Friday")
        break;
    default:
        console.log("I dont know")

}