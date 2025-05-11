// Example usage:
const shoppingCart = [
  { name: 'Laptop', quantity: 10, price: 1200 },
  { name: 'Mouse', quantity: 3, price: 25 },
  { name: 'Keyboard',quantity: 10, price: 75 },
  { name: 'Monitor',quantity: 3,  price: 300 }
];



let totalPrice = 0;

 shoppingCart.forEach((currentItem, index)=>{
    let item = currentItem.quantity * currentItem.price;
    totalPrice += item;

});


console.log(totalPrice);