const arr = ['ram', 'bahadur', 'thapa']

//Q1 output should be 'RAM-BAHADUR-THAPA'
console.log(arr.join('-').toUpperCase());     // Join() method joins all elements of an array into a string 
                                              // and toUpperCase() method converts the string to uppercase.


//Q2 output should be ['ram','thapa']

 // console.log(arr[0].concat(arr[arr.length-1]));  
 //arr.length-1 is used to get the last element of the array. 
 // concat() method is used to join two or more strings.


 
arr.splice(1, 1);   // splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
console.log(arr);