// Filter unique array members 
/* write function unique(arr) and return array with unique items */

let arrOfWords = ["Hare", "Krishna", "Hare", "Krishna", "Hare", "Hare", ":-0"];

function unique(arr){
    let uniqueItems = [];
    arr.forEach((item)=> !uniqueItems.includes(item)? uniqueItems.push(item): item);

    return uniqueItems;
}
console.log(unique(arrOfWords));


//Shuffling an array elements
/* Write function shuffle(array) that shuffles elements in array randomly*/
// using fisher-yates algo technique
let unShuffledArr = [1,2,3,4];

function shuffle(array){
    for(let i=array.length-1; i>=0; i--){
        let randomIndex = Math.floor(Math.random() * (i+1));

        let temp = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = temp;
    }

    return array;
}

console.log(shuffle(unShuffledArr));
console.log(shuffle(unShuffledArr));
console.log(shuffle(unShuffledArr));

