// 01 AddNumbers
function addNumbers(){
    const a = 1;
    const b = 1;

    let result = a + b;
    return result;
}

console.log(addNumbers());


// 02 number checker 

function numberChecker(number){
    if(number >= 10){
        return true;
    } else {
        return false;
    }
        
}

console.log(numberChecker(9));


// 03 Math equation
const a = 1-1;  // 0
const b = 1 + 8;  // 9
const c = 22 * 3;  // 66
const d = 5 % 4;  // 1
const e = b - 17;  //-8
const f = a + b + c + d + e;  


function mathEquation(a,b,c,d,e,f){
    if(a===0 && b===9 && c===66 && d === 1 && e === -8 && f=== 68){
        return true;
    } else {
        return false;
    }
}

console.log(mathEquation(a,b,c,d,e,f));


// 04. joinStrings
function joinStrings(){
    let firstName = 'Carlos', lastName = 'Stevenson';
    let  thisYear = 1965, birthYear = 1947;

    let sentence = "Hello! My name is " + firstName + " " + lastName + " and  I am " + (thisYear - birthYear) + " years old."

    return sentence;

}

console.log(joinStrings());