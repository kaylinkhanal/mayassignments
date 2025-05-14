// Some tasks
//1. Translate border-left-width to borederLeftWidth  (eg: str = border-width , output should be as borderWidth);

function camelize(str){
    
    const camalized = str.split('-').map((item, index)=>{
        if(index === 0){
           return  item;
        } else {
           return  item.at(0).toUpperCase() + item.slice(1);
        }
    }).join('');

    return camalized;
}

console.log(camelize('background-color'));
console.log(camelize('list-style-image'));
console.log(camelize("-webkit-transition"));


/* 2. filter range  */
/* function (arr, a, b ) get array arr, and looks for element value higher or equal to a 
 and less or equal to b  */

let elements = [5,3,8,1]
function filterRange(arr, a, b){
    const filtered = arr.filter((item) =>{
        if(item >= a && item <=b){
            return item;
        }
    });

    return filtered;
}

console.log(filterRange(elements, 1, 4));


/* 3. Sort in decreasing order */

let element = [5,2,1,-10, 8];

function sortInDecreasingOrder(el){
    const sortedVal = element.sort((a,b)=> b-a);

    return sortedVal;
}

console.log(sortInDecreasingOrder(element));


/* 4. Copy and sort array */
/* sort copy of arr but keep original arr unmodified 
   create function copySorted(arr) that returns such as copy */

let alphabets = ["HTML", "JavaScript", "CSS"];

function copySorted(arr){
    let copyOfArr = arr.slice();

    return copyOfArr.sort();
}

console.log(copySorted(alphabets));


/* 5 Map to names
 -- You have array of user object, write code to convert in to array of names */

 let john = {name: "John", age: 25, };
 let pete = {name: "Pete", age: 30 };
 let mary = { name: "Mary", age: 28 };

 let users  = [john, pete, mary];


 function getUsersName(users){
    return users.map((item)=> item.name);
 }

 let names = getUsersName(users);
 console.log(names);

 /*6.  Map to objects
    you have array of user object, each with name, surname and id
    create another array from it, of object with id, and fullName where
    fullName is geneared from name and surname */


let harry = {name: "Harry", surname: "Smith", id: 1};
let kane = { name: "Kane",  surname: "Hunt", id: 2};
let olivia = {name: "Olivia", surname: "key", id: 3};

let someUsers = [harry, kane, olivia];

let mappedArr = someUsers.map((item)=> {
    return {
        fullName: item.name + " " + item.surname,
        id:  item.id,
    }
});
console.log(mappedArr);

