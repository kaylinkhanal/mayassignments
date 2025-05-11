// Example usage:
const shoppingCart = [
  { name: 'Laptop', quantity: 10, price: 1200 },
  { name: 'Mouse', quantity: 3, price: 25 },
  { name: 'Keyboard',quantity: 10, price: 75 },
  { name: 'Monitor',quantity: 3,  price: 300 }
];


//using forEach calculate the total amount user needs to pay
let totalAmountForEach = 0;
shoppingCart.forEach(item => {
  totalAmountForEach += item.quantity * item.price;
});
console.log("Total amount using forEach:", totalAmountForEach);

//using reduce do the same
const totalAmountReduce = shoppingCart.reduce((sum, item) => {
  return sum + item.quantity * item.price;
}, 0);
console.log("Total amount using reduce:", totalAmountReduce);







