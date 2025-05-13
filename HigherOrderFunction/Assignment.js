//---->#Homework:- Using For each vs reduce for same problem..
const shoppingCart = [
  { name: 'Laptop', quantity: 10, price: 1200 },
  { name: 'Mouse', quantity: 3, price: 25 },
  { name: 'Keyboard',quantity: 10, price: 75 },
  { name: 'Monitor',quantity: 3,  price: 300 }
];


//using forEach calculate the total amount user needs to pay
 var totalamount=0;
shoppingCart.forEach((item) => {
  // console.log(item);   -->All ITEMS
 totalamount=totalamount+item.quantity*item.price;
});
  console.log("Total Amount:-"+totalamount);

//using reduce do the same
const total=shoppingCart.reduce((accumulator,CurrentValue)=>{
return accumulator+CurrentValue.quantity*CurrentValue.price;
},0);
console.log("Total Amount :"+total);