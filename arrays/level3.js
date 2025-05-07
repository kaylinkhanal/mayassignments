/**
 *  Level 3 – Intermediate Logic

    1. Combine two arrays: ['red', 'green'] and ['blue', 'yellow'], then sort them alphabetically.

    2. Create a function that accepts an array and returns a new array with duplicates removed.

    3. Count how many items in an array contain the letter 'a'.

    4.From ['ram', 'shyam', 'hari'], create an array like ['Ram is here', 'Shyam is here', 'Hari is here'].

 */


// 1,combining two array then sorting them in alphabetically order

let arr = ['red', 'green'];
let arr1 = ['blue', 'yellow'];

function combineAndSort(item1, item2){
   let newArr = [...item1, ...item2];
   return newArr.sort();
}
console.log(combineAndSort(arr, arr1));



//2. function that accepts array and return new array with duplicates removed

let arrEl = [1,2,3,1,3,4,5,6,6];

function removeDuplicates(arrEl){
   let uniqueArr = [];
   for(let i=0; i<=arrEl.length-1; i++){
      if(!uniqueArr.includes(arrEl[i])){
         uniqueArr.push(arrEl[i]);
      }
   }
   return uniqueArr;
}

console.log(removeDuplicates(arrEl));


// 3. Count how many items in an array contain the letter 'a'.

let arrItems = ['apple', 'banana', 'red', 'green', 'yellow'];

function countLetterA(){
   let count = 0;
   for(let i=0; i<=arrItems.length-1; i++){
      if(arrItems[i].includes('a')){
         count++;
      }
   }
   return count;
}

console.log(countLetterA());


/// 4.From ['ram', 'shyam', 'hari'], create an array like ['Ram is here', 'Shyam is here', 'Hari is here'].

let names = ['ram', 'shyam', 'hari'];

function concateTheElements(){
   let newArr = [];
   for(let i=0; i< names.length; i++){
      let item = names[i].charAt(0).toUpperCase() + names[i].slice(1) + " is here";
      newArr.push(item);
   }
   return newArr;
}

console.log(concateTheElements());

