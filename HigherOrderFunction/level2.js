
//! Level 2 (Basic Logic Building): Slightly Complex Operations

// Display Elements at Even Indexes:
// Write a program using forEach to display only the elements present at even indexes of the array const fruits = ["Apple", "Banana", "Cherry", "Dates", "Fig"].
// Expected Output: "Apple", "Cherry", "Fig".
const fruits = ["Apple", "Banana", "Cherry", "Dates", "Fig"];
const evenFruit=fruits.forEach((fruit,index)=>{
if(index%2===0){
console.log(fruit);
}
});


// Multiply Each Element by 2:
// Use map to create a new array where each element is multiplied by 2 from the array const numbers = [1, 2, 3, 4, 5].
// Expected Output: [2, 4, 6, 8, 10].
 const numbers = [1, 2, 3, 4, 5];
 const mulNumbers=numbers.map(num=>num*2);
console.log("Orginal Numbers "+numbers);
console.log("Multiplied by 2 Numbers "+mulNumbers);

// Filter Names Longer Than 5 Characters:
// Use filter to extract all names longer than 5 characters from the array const names = ["John", "Christina", "Alex", "Catherine"].
// Expected Output: ["Christina", "Catherine"].
 const names = ["John", "Christina", "Alex", "Catherine"];
 const filteredname=names.filter(items=>items.length>5);
 console.log("Orginal Names "+names);
 console.log("Filtered Names "+filteredname);


// Find Maximum Number:
// Use reduce to find the maximum number in the array const numbers = [12, 5, 8, 130, 44].
// Expected Output: 130.
const nums = [12, 5, 8, 130, 44];
const maxnum=nums.reduce((max,currvalue)=>{
return max>currvalue?max:currvalue;
});
console.log("Orginal Numbers :"+nums);
console.log("Maximum Number :"+maxnum);



