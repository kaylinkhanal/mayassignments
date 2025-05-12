const shoppingCart = [
  { name: 'Laptop', quantity: 10, price: 1200 },
  { name: 'Mouse', quantity: 3, price: 25 },
  { name: 'Keyboard',quantity: 10, price: 75 },
  { name: 'Monitor',quantity: 3,  price: 300 }];


// 1 using forEach calculate the total amount user needs to pay
let totalAmount=0;
 shoppingCart.forEach(item=>{
   (totalAmount=totalAmount+item.quantity*item.price);
    });
    console.log(totalAmount);
// 2 using reduce do the same
 const totalAmountReduce =shoppingCart.reduce((total,item)=>{
 return total+item.quantity*item.price;

 },0);
 console.log(totalAmountReduce);
