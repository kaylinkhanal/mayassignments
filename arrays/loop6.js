const arr = [['John', 25], ['Jane', 30], ['Jim', 35]];
console.log(Object.fromEntries(arr))

// Q1. convert the above array into an object
// {
//     age: {
//         John: 25,
//         Jane: 30,
//         Jim: 35
//     }
// }

const output = arr.filter((item)=>{
 return item
})

console.log(output)


const colors = ['red','green','red','green','blue']
let result={}
colors.forEach((item)=> {

    if (result[item]){
        result[item]++
     }else{
    result[item]= 1;
   }
})

console.log(result)
//expected output
// {
//    red: 2,
//    green: 2,
//    blue: 1
// }