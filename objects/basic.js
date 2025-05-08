//object: primitive data types
// bracket: {}
// key: value pair,
// object is based on keys for retrieval (using dot operator)

let scores =  {
    math: 350,
    science: 503,
    computer: 701
}


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