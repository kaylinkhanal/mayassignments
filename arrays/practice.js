const data = [10, 'apple', 25, 'banana', 5, 'cherry'];
// Q4. Calculate the sum of only the numeric values in the 'data' array.
// Expected output: 40
 const Num = data.filter(item=>typeof item ==='number');
const sumOfNum =Num.reduce((acc,curr)=>acc+curr,0);
console.log(sumOfNum);

const usersList = [
  { id: 1, name: 'Alice', isActive: true },
  { id: 2, name: 'Bob', isActive: false },
  { id: 3, name: 'Charlie', isActive: true },
];
// Q5. Create a new array containing only the names of the active users.
// Expected output: ['Alice', 'Charlie']
const activeUser = usersList.filter(item=>item.isActive).map(user=>user.name);
console.log(activeUser);



const product = {
  name: 'Laptop',
  details: {
    brand: 'Dell',
    model: 'XPS 15',
  },
  price: 1200,
};

// Q6. Access and log the model of the product.
// Expected output: XPS 15
console.log(product.details.model);