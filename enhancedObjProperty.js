const pricePropName = "PRICE";

const normalObj = (name, price) => {
    return {
        name: name,
        add: (n1, n2) => {
            return n1 + n2;
        },
        price: price
    }
}

const enhanceObj = (name, price) => {
    return {
        name,
        add(n1, n2) {
            return n1 + n2;
        },
        // [pricePropName.toLowerCase()]: price,
        price
    }
}

const normal = normalObj('normal', 25);
const enhance = enhanceObj('enhanced', 26);

console.log(normal);
console.log(normal.name);
console.log(normal.add(5, 6));
console.log(normal.price);
console.log("==================================")
console.log(enhance);
console.log(enhance.name);
console.log(enhance.add(5, 6));
console.log(enhance.price);
