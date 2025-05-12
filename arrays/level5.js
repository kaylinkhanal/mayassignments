const arr = [3,5,2,3,10]


let sum  = 0 

arr.forEach((item)=>{
    //Q1. write if statement here to only sum numbers greater than 4
    if(item > 4){
        sum = sum + item
    }
    console.log(sum);
    
})



const filteredOutput = arr.filter((item)=>{
    if(item % 2 !== 0){
     return item;
    }

    
   
})
    console.log("filteredOutput", filteredOutput);




const mapping = arr.map((item)=>{
 
    if (item % 2 != 0){
        return 1;
    }else{
        return 0;
    }
      
})
//Q3. output should be [1,1,0,1,0]
console.log("mapping", mapping);

const shoppingCart = [
  { name: 'Laptop', quantity: 10, price: 1200 },
  { name: 'Mouse', quantity: 3, price: 25 },
  { name: 'Keyboard',quantity: 10, price: 75 },
  { name: 'Monitor',quantity: 3,  price: 300 }
];


// using forEach calculate the total amount user needs to pay
    let totalAmountForEach = 0; 

shoppingCart.forEach((item) => {
  totalAmountForEach +=  item.quantity * item.price;
});

console.log("Total amount using forEach:", totalAmountForEach);


// using reduce do the same
const totalAmountReduce = shoppingCart.reduce((total, item) => {
    return total + item.quantity * item.price;
        }, 0); 

console.log("Total amount using reduce:", totalAmountReduce);