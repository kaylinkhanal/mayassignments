const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Phone", price: 1000 },
  { name: "Tablet", price: 300 },
  { name: "Monitor", price: 300 },
  { name: "Ball", price: 30 },
  { name: "Apple", price: 60 },

];

// Q1) Find the total price of all products

// Q2) Find the product with the highest price

// Q3) Group products into expensive (>=800) and cheap (<800)

// Q4) Sort products first by price, then by name

// Q5) Create a list of product names sorted alphabetically (case insensitive)

//1 solution
console.log('qutput of q1');

const totalPrice = products.map(product => product.price).reduce((acc, price) => acc + price)
console.log(totalPrice);

//2 solution
console.log('qutput of q2');

//price only
console.log('question no 2 output')
const sortedPrice = products.map(product => product.price).sort()
console.log(sortedPrice[0]);

//with product
const sortedProduct = products.sort((a, b) => {
  if (a.price > b.price) return 1
  if (a.price < b.price) return -1
  return 0
}
).reverse()
console.log(sortedProduct[0])

//3 solution
console.log('qutput of q3');
const expensiveProduct = []
products.map(product => {
  if (product.price >= 800)
    expensiveProduct.push(product)
}
)
const cheapProduct = []
products.map(product => product.price < 800 ? cheapProduct.push(product) : null)
console.log('question no 3 output')
console.log(expensiveProduct);
console.log(cheapProduct);

//Q4) solution
// 4 and 5 output are same
console.log('qutput of q4');
console.log('question no 4 o/p');

const sortedByPriceAndName = products.sort((a, b) => {
  if (a.price > b.price) return 1
  if (a.price < b.price) return -1
  return 0
}).sort((a, b) => {
  if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
  if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
  return 0
})
console.log(sortedByPriceAndName);

//By chatgpt
// const products = [
//     { name: "Laptop", price: 1000 },
//     { name: "Phone", price: 500 },
//     { name: "Tablet", price: 800 },
//     { name: "Monitor", price: 300 }
//   ];

products.sort((a, b) => {
  if (a.price !== b.price) {
    return a.price - b.price; // sort by price
  } else {
    return a.name.localeCompare(b.name); // if price same, sort by name
  }
});

console.log(products);


//5 solution
console.log('qutput of q5');

const sortedByName = products.sort((a, b) => {
  if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
  if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
  return 0
})
console.log(sortedByName);
