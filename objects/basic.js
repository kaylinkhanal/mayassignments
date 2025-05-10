//object: primitive data types
// bracket: {}
// key: value pair,
// object is based on keys for retrieval (using dot operator)

let scores =  {
    math: 350,
    science: 503,
    computer: 701
}


<<<<<<< HEAD
// console.log(scores.kaylin)


//Q1. calculate the percetange scored, full marks of each subject is 1000, and round off to 2 decimal places
let fullMarks = 3000;
let marksObtained = scores.math + scores.science + scores.computer;
let percetangeScored = ((marksObtained/fullMarks) * 100).toFixed(2);
console.log(percetangeScored);

//q2. what is destructuring an object . solve q1 using destructuring method
let {math, science, computer} = scores;
console.log((((math+science+computer)/fullMarks)*100).toFixed(2));

//q3. delete science from scores object
delete scores.science;
console.log(scores);

//q4 add new subject called 'english' with score 800
scores.computer = 701;
scores.english = 800;
console.log(scores);
=======



//Q1. calculate the percetange scored, full marks of each subject is 1000, and round off to 2 decimal places
console.log(((scores.math + scores.science + scores.computer)/3000*100).toFixed(2))
//Q2. what is destructuring an object. solve Q1 by destructuring method.
const {math, science, computer} = scores;
console.log((math+science+computer)/3000*100)

// Q3. delete science from scores object
//expected output: { math: 350, computer: 701 }
delete scores.science
console.log(scores)
// const { dance, ...allOther} = scores;   ---- rest operator
// console.log( allOther)
// const backup = {...scores}    ---spread operator

// Q4. add a new subject called 'english' with score 800
//expected output: { math: 350,  computer: 701, english: 800 }
scores.english = 800
console.log(scores)
>>>>>>> 1cc92d1f5a15162cf09591b461e5a417831d70f1
