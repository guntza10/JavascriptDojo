const products = [
  ["key", "500", "2014"],
  ["remote", "600", "2013"],
  ["tv", "1500", "2015"],
  ["macbook", "2500", "2014"],
  ["ps5", "3000", "2015"],
];

const types = [
  ["Type1", "2014"],
  ["Type2", "2000"],
  ["Type3", "2400"],
];

const filterByTypeProduct = (products, type) => {
  const newProduct = products.map((v) => ({
    name: v[0],
    price: v[1],
    year: v[2],
  }));

  const newType = types.map((v) => ({
    type: v[0],
    value: v[1],
  }));

  let result = [];
  for (let type of newType) {
    if (type.type == "Type1") {
      const newProductType1 = newProduct.filter((v) => v.year == type.value);
      result.push(newProductType1);
    } else if (type.type == "Type2") {
      const newProductType2 = newProduct.filter(
        (v) => parseInt(v.price) < parseInt(type.value)
      );
      result.push(newProductType2);
    } else if (type.type == "Type3") {
      const newProductType3 = newProduct.filter(
        (v) => parseInt(v.price) > parseInt(type.value)
      );
      result.push(newProductType3);
    }
  }

  const finalResult = result.map((v) => {
    const newResult = v.map((i) => i.name);
    return newResult;
  });
  return finalResult;
};

console.log(filterByTypeProduct(products, types));
