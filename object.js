var person = {
    name: 'Jomphop Saibuatong',
    age: 25,
    isHeartBreak: true,
    address: {
        firstLine: '123',
        postCode: '40000',
        country: 'Thailand'
    }
};

console.log(person);
console.log(JSON.stringify(person));
console.log(person.name);
console.log(person.age);
console.log(person.isHeartBreak);
console.log(person.address);
console.log(JSON.stringify(person.address));

console.log(Object.values(person));

var t = Object.values(person).map(it => it = 'gunt').forEach(it => console.log(it));
