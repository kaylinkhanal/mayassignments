const arr = [['John', 25], ['Jane', 30], ['Jim', 35]];

// Q1. convert the above array into an object
// {
//     age: {
//         John: 25,
//         Jane: 30,
//         Jim: 35
//     }
// }

console.log(Object.fromEntries(arr));




// Interview Question // 
let result= {
}
const colors = ['red','green','red','green','blue']
//expected output
// {
//    red: 2,
//    green: 2,
//    blue: 1
// }
colors.forEach(item=>{
    // debugger;
    if(result[item])
    {
        result[item]++;
    }
    else{
result[item]= 1
    }
})
console.log(result);