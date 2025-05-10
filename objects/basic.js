//object: primitive data types
// bracket: {}
// key: value pair,
// object is based on keys for retrieval (using dot operator)

let scores =  {
    math: 350,
    science: 503,
    computer: 701
}
//Q1. calculate the percetange scored, full marks of each subject is 1000, and round off to 2 decimal placesre
ans= ((scores.math+scores.science+scores.computer)/3000*100);
console.log(ans.toFixed(2));    // 51.80


//Q2. what is destructuring an object. solve Q1 by destructuring method.
const {math,science,computer}=scores;
console.log((math+science+computer)/3000*100);  //  51.800000000000004

// Q3. delete science from scores object
delete scores.science;
console.log(scores);     
// { math: 350, computer: 701 }

// Q4. add a new subject called 'english' with score 800
scores.english= 800;
console.log(scores);
// { math: 350, computer: 701, english: 800 }
