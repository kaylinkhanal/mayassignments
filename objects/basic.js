//object: primitive data types
// bracket: {}
// key: value pair,
// object is based on keys for retrieval (using dot operator)

let scores =  {
    math: 350,
    science: 503,
    computer: 701
}


console.log(scores.kaylin)


//Q1. calculate the percetange scored, full marks of each subject is 1000, and round off to 2 decimal places
let fullmarks = 3000;
let obtained= scores.math+scores.science+scores.computer;
let percentage= ((obtained/fullmarks)*100).toFixed()
console.log(percentage);

//Q2. what is the destructuring an object. solve Q1 by destructuring method
let {math,science,computer} = scores;
console.log(((math+science+computer)/fullmarks*100).toFixed());


//Q3. delete science from scores objects
delete scores.science;
console.log(scores);

// const {science,...allother}= scores;
// console.log(allother)


//Q4. add a new subject called 'english' with score 800
scores.english=800;
console.log(scores);
