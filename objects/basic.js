//object: primitive data types
// bracket: {}
// key: value pair,
// object is based on keys for retrieval (using dot operator)

let scores = {
    math: 350,
    science: 503,
    computer: 701
}


console.log(scores)


//Q1. calculate the percetange scored, full marks of each subject is 1000, and round off to 2 decimal places
function CalculatePercent(obj) {
    const total = scores.computer + scores.math + scores.science
    const percetange = (total / 3000) * 100
    return percetange.toFixed(2)
}
console.log(CalculatePercent(scores))

//Q2) what is destructuring an object. solve Q1 by destructuring method.

const { math, science, computer } = scores;
console.log((math + science + computer) / 3000 * 100)
// delete science from scores object
delete scores.science
console.log(scores)
// modern syntax
//const {dance,...allother} = scores; ---- rest operator
//console.log(allothers) 
// const backup = {...scores} ----spread operator

//q4 
scores.english = 800;
console.log(scores);
