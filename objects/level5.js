const products = [
  { id: 1, category: 'Electronics', name: 'Laptop', price: 1200 },
  { id: 2, category: 'Books', name: 'The Great Gatsby', price: 15 },
  { id: 3, category: 'Electronics', name: 'Mouse', price: 25 },
  { id: 4, category: 'Books', name: 'To Kill a Mockingbird', price: 12 },
  { id: 5, category: 'Clothing', name: 'T-Shirt', price: 20 }
];

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

// using reduce methods
const groupedProducts = products.reduce((accum, currentProduct) => {

    const category = currentProduct.category;
    

    if(!accum[category]){
        accum[category] = [];
    }
     
    accum[category].push(currentProduct);
    return accum;

}, {} )
console.log("groupedProducts are", groupedProducts);


// using foreach

const groupedProductsByForEach = {}

products.forEach((product) => {

    const category = product.category;

    if(!groupedProductsByForEach[category]){
        groupedProductsByForEach[category] = [product];
    }else{
        groupedProductsByForEach[category].push(product);
    }
})

console.log("groupProducts by foreach", groupedProductsByForEach);
