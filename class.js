class Animal {
    /*
    - เป็นการกำหนดค่าเริ่มต้นให้กับ class, constructor() จะถูก invoke ทุกครั้งเมื่อมีการ 
    instance class(สร้าง object จาก class ผ่าน new keyword)
    - ใน class จะมี property,behavior
        - เราสร้าง property ผ่าน parameter ของ constructor()
    */

    constructor(name, age) {
        // property
        this.name = name;
        this.age = age;
        console.log(`${this.name} is an animal and was created`);
    }

    static iAmAstaticMethod() {
        console.log('I am a static method inside of an Animal class');
    }

    // behavior
    eat() {
        console.log(`${this.name} is eating`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }

    wakeUp() {
        console.log(`${this.name} is waking up`)
    }

    logAge() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}

const bobby = new Animal('Bobby', 5);
bobby.eat();
bobby.sleep();
bobby.wakeUp();
bobby.logAge();
console.log('=====================================');
const marshall = new Animal('Marshall', 3);
marshall.eat();
marshall.sleep();
marshall.wakeUp();
marshall.logAge();
console.log('=====================================');
/* Class Inheritance */
class Dog extends Animal {
    constructor(name, age, breed) {
        /* 
        เป็นการไปเรียกใช้ super constructor ของ parent class (super class)
        => super() เป็นการ Pass parameter ไปให้ constructor ของ parent class (super class) ที่เราไป inheritance มา
        */
        super(name, age);
        this.breed = breed;
    }

    logBreed() {
        console.log(`${this.name} is a ${this.breed}`);
    }

    logAgeFromDog() {
        // super เป็นการ access เข้าถึง property , method ของ super class
        super.logAge();
    }
}

class Cat extends Animal {
    constructor(name, age) {
        super(name, age);
    }

    logAgeFromCat() {
        super.logAge();
    }
}

const mike = new Dog('Mike', 4, 'Bulldog');
mike.logBreed();
mike.logAge();
mike.logAgeFromDog();
console.log("====================================");

const josh = new Cat('Josh', 2);
josh.logAgeFromCat();
josh.eat();
josh.sleep();
josh.wakeUp()
josh.logAge();
console.log("====================================");
/* Class Static Method 
 - จะใช้ก็ต่อเมื่อเราไม่ต้องการ create หรือ instance class แต่เราอยากเรียกใช้ method ของ class เลย ก็กำหนดให้ method เป็น static
*/
Animal.iAmAstaticMethod();