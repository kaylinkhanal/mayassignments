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


// ## Array Cardio Exercise
    // Some data we can work with
    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

 
    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    console.log(inventors.filter((item)=> item.year >= 1500 && item.year <=1599));

    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names
    console.log(inventors.map((item)=>{
        return {
            first: item.first,
            last: item.last,
        }
    }))

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    console.log(inventors.sort((a,b) => {
        if(a.year > b.year){
            return -1;
        } else {
            return 1;
        }
    }))

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?
    const yearsAltogether =(inventors.reduce((acc, nextValue)=>{
            let yearslived = nextValue.passed - nextValue.year;
            return acc + yearslived;
    },0));

    console.log(yearsAltogether);

    // 5. Sort the inventors by years lived
    const yearsLived = inventors.sort((a,b)=>{
        if((a.passed - a.year) > (b.passed - b.year)){
            return -1;
        } else if((a.passed - a.year) < (b.passed - b.year)){
            return 1;
        } else {
            return 0;
        }
    })
   
    // 6.. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    const sumUpinstance = data.reduce((item, nextValue)=>{
        if(!item[nextValue]){
             item[nextValue] = 0;
        }
        else {
         item[nextValue]++;
        }
        return item;
    },{})

    console.log(sumUpinstance);