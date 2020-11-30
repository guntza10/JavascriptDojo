const getUser = () => {
    return {
        name: 'John',
        surname: 'Doe',
        gender: 'male',
        address: {
            country: 'United States',
            city: 'California',
            postCode: 'CA',
            fullAddress: {
                doorNumber: 22,
                street: 'LA st'
            }
        },
        age: 29
    }
};

const user = getUser();

/* bad code*/
// const name = user.name;
// const age = user.age;
// const country = user.address.country;
// const doorNumber = user.address.fullAddress.doorNumber;

/* use object destructuring*/

const { name: theName, age: theAge, address: { country: theCountry } } = user;
const { address: { fullAddress: { doorNumber: number } } } = user;

console.log('แบบที่ 1');
console.log(theName);
console.log(theAge);
console.log(theCountry);
console.log(number);

const { name, age, address: { country, fullAddress: { doorNumber } } } = user;

console.log('แบบที่ 2');
console.log(name);
console.log(age);
console.log(country);
console.log(doorNumber);

/* เพิ่มเติม
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment 
*/
