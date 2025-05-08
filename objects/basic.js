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



console.log(`Total Score: ${totalScore}`);

    let percentage = (totalScore/ fullMarks) * 100;
    console.log( percentage.toFixed(2));

// q2 --> what is destructing of an object. solve it by destructing method

const {math, science, computer} = scores;


const percentage2 = ((math+science+computer)/fullMarks)*100;


console.log("percentage2 of score is", percentage2.toFixed(2) );

