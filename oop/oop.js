//#region Object
// 1. Literal
let person = {
    first_name: 'Mukul',
    last_name: 'Latiyan',
    //method 
    getFunction: function () {
        return (`The name of the person is  
          ${person.first_name} ${person.last_name}`)
    },
    //object within object 
    phone_number: {
        mobile: '12345',
        landline: '6789'
    }
};

// 2. Object Constructor
//using a constructor 
function person(first_name, last_name) {
    this.first_name = first_name; // this keyword เป็น property ของ object ที่สร้างจาก function (Object Constructor) สามารถ access ได้แบบ public
    this.last_name = last_name;
}
//creating new instances of person object 
let person1 = new person('Mukul', 'Latiyan');
let person2 = new person('Rahul', 'Avasthi');

// 3 . Object.create() method
// simple object with some properties 
const coder = {
    isStudying: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I  
          studying?: ${this.isStudying}.`)
    }
};
// Object.create() method 
const me = Object.create(coder);

// "name" is a property set on "me", but not on "coder" 
me.name = 'Mukul';

// Inherited properties can be overwritten 
me.isStudying = 'True';
//#endregion

//#region Class
class Vehicle {
    constructor(name, maker, engine) {
        this.name = name; // this keyword เป็น Property ของ class
        this.maker = maker;
        this.engine = engine;
    }
    getDetails() {
        return (`The name of the bike is ${this.name}.`)
    }
}
// Making object with the help of the constructor 
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');
//#endregion

//#region Encapsulation
//encapsulation example 
class person {
    // this keyword property ที่อยู่ใน constructor จะสามารถ access ได้แบบ public
    constructor(name, id) {
        // property name,id เป็น property ที่สามารถ access ได้แบบ public
        this.name = name;
        this.id = id;
    }
    add_Address(add) {
        // property add ไม่สามารถ access ได้แบบ public จะ access ได้ผ่าน method add_Address() เท่านั้น
        this.add = add;
    }
    getDetails() {
        console.log(`Name is ${this.name},Address is: ${this.add}`);
    }
}

let person1 = new person('Mukul', 21);
person1.add_Address('Delhi');
person1.getDetails(); 

// Abstraction example 
function person(fname, lname) {
    let firstname = fname;
    let lastname = lname;

    let getDetails_noaccess = function () {
        return (`First name is: ${firstname} Last 
			name is: ${lastname}`);
    }
   
    this.getDetails_access = function () {
        return (`First name is: ${firstname}, Last 
			name is: ${lastname}`);
    }
}
let person1 = new person('Mukul', 'Latiyan');
// let เป็น scope variable ไม่สามารถ access ได้แบบ public
console.log(person1.firstname);
console.log(person1.getDetails_noaccess);
// เป็น property ของ Object ที่สร้างผ่าน function (เป็น this keyword ของ function)
console.log(person1.getDetails_access()); 

//#endregion

//#region Inheritance
class person {
    constructor(name) {
        this.name = name;
    }
    //method to return the string 
    toString() {
        return (`Name of person: ${this.name}`);
    }
}
class student extends person {
    constructor(name, id) {
        //super keyword to for calling above class constructor 
        super(name);
        this.id = id;
    }
    // overide method ของ child class
    toString() {
        // เรียกใช้ toString() ของ Parent class
        return (`${super.toString()},Student ID: ${this.id}`);
    }
}
let student1 = new student('Mukul', 22);
console.log(student1.toString());  
//#endregion

/*
- https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/
- https://css-tricks.com/the-flavors-of-object-oriented-programming-in-javascript/
 */

 /*
 Note : ในการสร้าง object ทำได้ 3 แบบ
 - literal
 - object constructor [contructor function] (สร้างจาก function ผ่าน new keyword)
 - class ES6 (สร้างจาก class ผ่าน new keyword)
  */

  /*
  Note : 
  - factory function => function ที่ return เป็น object (ไม่ต้อง Instance new keyword เรียกใช้ได้เลย)
  - contructor function => funtion ที่ใช้ this keyword เป็น property ถูกสร้างเป็น object ผ่าน new keyword
   */

   /*
   Note : property(this keyword) ใน function ปกติ มัน declare บน prototype property เป็น default อยู่แล้ว
    */
