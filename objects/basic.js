//object: primitive data types
// bracket: {}
// key: value pair,
// object is based on keys for retrieval (using dot operator)

let scores =  {
    math:350,
    science:503,
    computer:701
}


// console.log(scores.kaylin)


//Q1. calculate the percetange scored, full marks of each subject is 1000, and round off to 2 decimal places

let perc=(scores.math +scores.science+scores.computer)/ 3000 * 100
console.log(perc.toFixed(2)); 

//Q2.what is Destructuring an object. solve Q1 by destructuring method
const {math,science,computer}=scores;
console.log((math+science+computer)/3000*100);

//Q3. delete sciemce from scores ojects
delete scores.science;
// const {science, ...allOther}=scores;         ----rest operator
// console.log(...allOther);

//const backup={...scores}       -----Spread Operator

//Q4. add a new subject called 'english' with score 800
scores.english=800;
console.log(scores);