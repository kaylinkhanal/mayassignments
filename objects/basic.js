//object: primitive data types
// bracket: {}
// key: value pair,
// object is based on keys for retrieval (using dot operator)

let scores =  {
    math: 350,
    science: 503,
    computer: 701
}


console.log(scores.math)


//Q1. calculate the percetange scored, full marks of each subject is 1000, and round off to 2 decimal places

console.log((((scores.computer+scores.math+scores.science)/3000)*100).toFixed(2))

//Q2. what is destructuring an object. solve Q1 by destructuring method.
const {math, science,computer } = scores;
console.log(((math+science+computer)/3000)*100)

// Q3. delete science from scores object
//expected output: { math: 350, computer: 701 }

delete scores.science
console.log(scores)

// modern syntax
// const {dance, ...allOther} = scores
// console.log(allOther)


// Q4. add a new subject called 'english' with score 800
//expected output: { math: 350, science: 503, computer: 701}

scores.english =800
console.log(scores)







