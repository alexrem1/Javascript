// map cycles through an array and we can create a new array, based on that array
const prices = [20, 10, 30, 25, 40, 80, 5];

const salePrices = prices.map((price) => price / 2);
console.log(salePrices);

const products = [
  { name: "gold star", price: 20 },
  { name: "mushroom", price: 40 },
  { name: "green shells", price: 30 },
  { name: "banana skin", price: 10 },
  { name: "red shells", price: 50 },
];

// new {} does not edit the original array
const saleProducts = products.map((product) => {
  if (product.price > 30) {
    return { name: product.name, price: product.price / 2 };
  } else {
    return product;
  }
});
console.log(saleProducts, products);
