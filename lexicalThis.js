const person = {
    name: 'Alex',
    cars: ['ferrari', 'lambo'],
    // anonymous function
    toString: function () {
        console.log('toString', this.name, this.cars);
        // call back arrow function
        this.cars.forEach(car => {
            console.log(`${this.name} has ${car}`);
        });
    },
    // anonymous function
    toString2: function () {
        console.log('toString2', this.name, this.cars);
        // call back function
        this.cars.forEach(function (car) {
            console.log(`${this.name} has ${car}`)
        }.bind(this));
    },
    // declaration function
    toString3() {
        console.log('toString3', this.name, this.cars);
        this.cars.forEach(car => {
            console.log(`${this.name} has ${car}`);
        });
    },
    // anonymous function arrow function
    toString4: () => {
        /*
            ไม่สามารถอ้างถึง this ได้ เพราะใน lexical scope ไม่มี this
         */
        console.log('toString4', this.name, cars);
        this.cars.forEach(car => {
            console.log(`${this.name} has ${car}`);
        });
    }
}

// person.toString();
// person.toString2();
// person.toString3();
person.toString4();

/*
Lexical this
โดยปกติ this คือการอ้างถึง Property ภายใน scope นั้นๆ ที่เราต้องการใช้
- ใน funciton ปกติ จะอ้างถึง this ได้ที่อยู่ใน parent scope ของมัน
- ใน call back function ปกติ จะไม่สามารถอ้างถึง this อื่นได้ เนื่องจากมันมี this เป็นของตัวเอง ถ้าจะใช้ this อื่นต้องมีการ bind(this) ให้
- ใน call back arrow function ไม่มี this เป็นของตัวเอง เพราะฉะนั้น จึงสามารถ อ้างอิง this ของ property
  ของ parent scope(ใน lexical scopeที่มันอยู่เท่านั้น) ได้เลย
- ใน arrow function จะอ้างถึง this ได้ก็ต่อเมื่อใน parent scope มันมี this ถ้าไม่มี มันจะอ้างอิงถึง outer scope 
 */


/*
- https://ui.dev/this-keyword-call-apply-bind-javascript/ (this)
- https://ui.dev/arrow-functions/ (arrow function)
- https://www.codementor.io/@dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc (this in arrow function)
 */