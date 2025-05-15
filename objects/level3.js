

const shoppingCart = [
  { name: 'Laptop', quantity: 10, price: 1200 },
  { name: 'Mouse', quantity: 3, price: 25 },
  { name: 'Keyboard',quantity: 10, price: 75 },
  { name: 'Monitor',quantity: 3,  price: 300 }
];


// using forEach calculate the total amount user needs to pay
let totalPrice = 0;
shoppingCart.forEach(item => {
  totalPrice += item.price * item.quantity;
});
console.log(totalPrice)


// using reduce do the same

const reducedPrice = shoppingCart.reduce((accumulator, currentItem) => {
  return accumulator + (currentItem.price * currentItem.quantity);
}, 0);

console.log(reducedPrice);