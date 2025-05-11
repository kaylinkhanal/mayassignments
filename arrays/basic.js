const arr = [1, 4, 5, 6, 7, 1]

// Q1 output should be 6

console.log(arr.length)

// Q2 output should be [1,4,5]
console.log(arr.slice(0, 3))
// Example usage:
const shoppingCart = [
    { name: 'Laptop', quantity: 10, price: 1200 },
    { name: 'Mouse', quantity: 3, price: 25 },
    { name: 'Keyboard', quantity: 10, price: 75 },
    { name: 'Monitor', quantity: 3, price: 300 }
];


//using forEach calculate the total amount user needs to pay
let sum = 0
shoppingCart.forEach(item => {
    sum += item.price * item.quantity
})
console.log(sum);


//using reduce do the same
const totalPayableAmount = shoppingCart.reduce((acc, item) => {
    return acc + item.price * item.quantity
}, 0)
console.log(totalPayableAmount);
