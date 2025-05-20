// hey guys, i have tried this object's level 5 problem  
const products = [
  { id: 1, category: 'Electronics', name: 'Laptop', price: 1200 },
  { id: 2, category: 'Books', name: 'The Great Gatsby', price: 15 },
  { id: 3, category: 'Electronics', name: 'Mouse', price: 25 },
  { id: 4, category: 'Books', name: 'To Kill a Mockingbird', price: 12 },
  { id: 5, category: 'Clothing', name: 'T-Shirt', price: 20 }
];


const groupedProducts = products.reduce((acc, product) => {
  const { category } = product;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(product);
  return acc;
}, {});
console.log(groupedProducts);




// Q5. Group the products by their 'category' property.

// Expected Output:
// {
//   Electronics: [
//     { id: 1, category: 'Electronics', name: 'Laptop', price: 1200 },
//     { id: 3, category: 'Electronics', name: 'Mouse', price: 25 }
//   ],
//   Books: [
//     { id: 2, category: 'Books', name: 'The Great Gatsby', price: 15 },
//     { id: 4, category: 'Books', name: 'To Kill a Mockingbird', price: 12 }
//   ],
//   Clothing: [
//     { id: 5, category: 'Clothing', name: 'T-Shirt', price: 20 }
//   ]
// }




