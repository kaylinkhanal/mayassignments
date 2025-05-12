const arr = [3,5,2,3,10]


let sum  = 0 

arr.forEach((item)=>{
    //Q1. write if statement here to only sum numbers greater than 4
    if(item>4){
        sum = sum + item
    }
})

console.log(sum)




const filteredOutput = arr.filter((item)=>{
        //Q2 only return odd numbers
        if(item%2!==0){
                    return item;

        }
   
})

console.log(filteredOutput)



const mapping = arr.map((item)=>{
 ///write your code here
    return item%2
})
console.log(mapping)
//Q3. output should be [1,1,0,1,0]


// Example usage:
const shoppingCart = [
  { name: 'Laptop', quantity: 10, price: 1200 },
  { name: 'Mouse', quantity: 3, price: 25 },
  { name: 'Keyboard',quantity: 10, price: 75 },
  { name: 'Monitor',quantity: 3,  price: 300 }
];


using forEach calculate the total amount user needs to pay

using reduce do the same
