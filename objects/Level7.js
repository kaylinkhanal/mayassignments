const cart = {
  user: 'Alice',
  items: [
    { name: 'Apple', pricePerUnit: 0.5, quantity: 10, tags: ['fruit', 'organic'] },
    { name: 'Banana', pricePerUnit: 0.3, quantity: 5, tags: ['fruit'] },
    { name: 'Milk', pricePerUnit: 2.5, quantity: 2, tags: ['dairy', 'beverage'] },
    { name: 'Bread', pricePerUnit: 1.8, quantity: 1, tags: ['bakery'] }
  ]
};

// Q7. Add a 'totalItemPrice' to each item object and calculate 'cartTotalPrice' for the entire cart.
// Also, create a summary of item quantities by the first tag of each item.
// Expected Output:
// {
//   user: 'Alice',
//   items: [
//     { name: 'Apple', pricePerUnit: 0.5, quantity: 10, tags: ['fruit', 'organic'], totalItemPrice: 5 },
//     { name: 'Banana', pricePerUnit: 0.3, quantity: 5, tags: ['fruit'], totalItemPrice: 1.5 },
//     { name: 'Milk', pricePerUnit: 2.5, quantity: 2, tags: ['dairy', 'beverage'], totalItemPrice: 5 },
//     { name: 'Bread', pricePerUnit: 1.8, quantity: 1, tags: ['bakery'], totalItemPrice: 1.8 }
//   ],
//   cartTotalPrice: 13.3,
//   tagQuantitySummary: {
//     fruit: 15, // 10 (Apple) + 5 (Banana)
//     dairy: 2,
//     bakery: 1
//   }
// }

const itemArray = Object.values(cart.items)
console.log("item object is",itemArray);

let totalItemPrice = 0;

 itemArray.forEach((item) => {
    totalItemPrice =  totalItemPrice + (item.pricePerUnit * item.quantity);
 })
 console.log("totalItemPrice", totalItemPrice);
 

 //tagQuantitySummery
  let tagQuantitySummery = {};


 itemArray.forEach((item) =>{
   
    let firstTag = item.tags[0];

    if(firstTag){
        tagQuantitySummery[firstTag] = (tagQuantitySummery[firstTag]  || 0) + item.quantity

    }


 })

console.log('number of items by their first tag', tagQuantitySummery);


