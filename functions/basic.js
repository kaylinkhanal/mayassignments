// let a = 1
// const test=()=>{
//     a= a +100
// }


// // assinging parameters

// const giveMeCar = ( price, brand)=>{
//     return "The brand " + brand + "price is "+ price 
//   }
  
//   //passing arguments
//   console.log(giveMeCar('Toyota',5300000))
//   console.log(giveMeCar('Mercedes',15300000))
//   console.log(giveMeCar('BMW',14300000))


  //what is pure and impure function



// PURE vs IMPURE 

// IMPURE:

// -> might not always return same output for a given input to the function
// -> impure needs to create global var
// -> impure functions will change external resources
// -> impure has side effects
// -> impure functions are difficult to test



// -> pure will not modify outer (external resources)
let mathScore = 30
function addPracticalMarks(){
mathScore = mathScore+ 25
return mathScore
}

console.log(addPracticalMarks())
console.log(mathScore)


// --> QA

// Unit test
// Regression test
// Integration testing 
// System test


// TDD


// -> if possbile, always create a pure function







  //reduce loop in js



  
