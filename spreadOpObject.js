const address = {
    city: 'LA',
    country: 'USA',
    postCode: 'LA44'
};

const name = {
    firstName: 'Andy',
    lastName: 'Jones'
};

const personWithoutSpreadOp = {
    city: address.city,
    country: address.country,
    postCode: address.postCode,
    firstName: name.firstName,
    lastName: name.lastName
}

// spread operator object
const personWithSpreadOp = {...address, ...name };

console.log(JSON.stringify(personWithoutSpreadOp));
console.log(JSON.stringify(personWithSpreadOp));

/* Spread Operator Object
คือ เอาทุก property ใน Object ออกมา
 */