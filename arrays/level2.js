/* Level 2 Arrays (basics)
    
const arr = ['apple', 'banana', 'cherry', 'date']

1. remove the first and last element, and log the array.

2. return a new array where each string in arr is reversed.

3. Check if every element in arr has a length greater than 3.

4. Use filter to create a new array containing only elements that start with 'b'.

5. Find the index of 'cherry' in the array.
*/

const arr = ['apple', 'banana', 'cherry', 'date'];

// 1. removeing the first and last element and logging the array
arr.shift();
arr.pop();
console.log(arr);

// 2. return new array where each string in arr is reversed

function reverseEachElements(arr){
    let newArr = [];
    for(let i=0; i<=arr.length-1; i++){
        let reverseEl = arr[i].split('').reverse().join('');
        newArr.push(reverseEl);
    }
    return  newArr;
}

console.log(reverseEachElements(arr));

// 3.  check if every element in arr has length greater than 3

function checkForLength(arr){
    for(let i=0; i<=arr.length-1; i++){
        if(arr[i].length <= 3){
            return false;
        } 
        return true;
    }
}

console.log(checkForLength(arr));


// 4.  use filter to create new arr containgi ele that startWith b
const startingWith = arr.filter((item) => item.startsWith('b'));
console.log(startingWith);


// 5. find index of 'cherry' in array

const indexVal = arr.indexOf("cherry");
console.log(indexVal);