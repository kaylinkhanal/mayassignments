
/**
 * Write the code for each
    * Create an empty object user
    * Add property name with the value John
    * Add the property surname with value Smith
    * Chnage the value of the name to Pete
    * Remove the property name from the object
 */
const obj = {};
obj.name = "John";
obj.surname = "Smith";
obj["name"] = "Pete";
delete obj.name;

console.log(obj);

/**
 * Check for emptiness isEmpty(obj) return true if obj has no property false otherwise
 */

let schedule = {};

function isEmpty(obj){
    if(!Object.hasOwnProperty(schedule)){
        return true;
    } else {
        return false;
    }
}

console.log(isEmpty(schedule));

/** 
 * Sum Object Properties
 * sum all salaries and store in sum, 
 */

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

function sumOfProperties(obj){
    let sum = 0;
   for(let key in obj){
        sum += obj[key];
   }
   return sum;
}

console.log(sumOfProperties(salaries));

/**
 * Multiply numeric property values by 2
 */

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] === 'number'){
            obj[key] *=2;
        }
    }
    return obj;
}

console.log(multiplyNumeric(menu));