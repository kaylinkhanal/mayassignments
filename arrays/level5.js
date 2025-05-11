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
        if (item % 2 !==0){
           return item
        }
        
   
})

console.log(filteredOutput)



const mapping = arr.map((item)=>{
 ///write your code here
    return item
})
console.log(mapping)
//Q3. output should be [1,1,0,1,0]