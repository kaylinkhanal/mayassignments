//object: primitive data types
// bracket: {}
// key: value pair,
// object is based on keys for retrieval (using dot operator)

let scores =  {
    kaylin: 350,
    ram: 503,
    shyam: 701
}


console.log(scores.kaylin)


//Q1. calculate the percetange scored, full marks of each subject is 1000, and round off to 2 decimal placesre
ans= (((scores.kaylin+scores.ram+scores.shyam)/3000)*100);
console.log(ans);
result=Math.round(ans);
console.log(result);