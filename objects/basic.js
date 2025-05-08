//object: primitive data types
// bracket: {}
// key: value pair,
// object is based on keys for retrieval (using dot operator)

let scores =  {
    math: 350,
    science: 503,
    computer: 701
}

// Calculate percentage scored and round off to 2 decimal places
let fullMarks = 3000;
let totalScore = Object.values(scores).reduce((sum, value) => sum + value, 0);
// let totalScore = scores.computer+scores.math+scores.science;

console.log(`Total Score: ${totalScore}`);

    let percentage = (totalScore/ fullMarks) * 100;
    console.log( percentage.toFixed(2));

// q2 --> what is destructing of an object. solve it by destructing method

const {math, science, computer} = scores;


const percentage2 = ((math+science+computer)/fullMarks)*100;


console.log("percentage2 of score is", percentage2.toFixed(2) );



// Q3. delete science from scores object
//expected output: { math: 350, computer: 701 }

// Q3. delete science from scores object
//expected output: { math: 350, computer: 701 }

delete scores.science;

console.log(scores); // Output: { math: 350, computer: 701 }


// alternative and better methode
const { science2, ...updatedScores } = scores;

console.log(updatedScores); // Output: { math: 350, computer: 701 }

// Q4. add a new subject called 'english' with score 800
//expected output: { math: 350, science: 503, computer: 701}


// Method 1: Add 'english' using dot notation
scores.english = 800;

console.log(scores); 
// Output: { math: 350, science: 503, computer: 701, english: 800 }


// Method 2: Add 'english' using Object.assign()
Object.assign(scores, { english: 800 });

console.log(scores); 
// Output: { math: 350, science: 503, computer: 701, english: 800 }