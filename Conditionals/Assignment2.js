/**
 * Check for the range between
    * write if statement to check age between 14 and 90 inclusively 
 */

function rangeBetween(){
    let age = 45;

    if(age >=14 && age <=90){
        return 'inclusive';
    } else {
        return 'not inclusive'
    }
}

console.log(rangeBetween());


/**
 * Check for the range outside
    * write if statement to check age is not between 14 and 90 inclusively 
    * create with two varient first with NOT and second without using NOT
 */

function rangeOutsideNOT(){
    let age = 12;
    if(!(age >=14 && age <=90)){
        return 'not between 14 and 90 (outside)'
    } else {
        return 'between 14 and 19 (withinRange)'
    }
}

console.log(rangeOutsideNOT());

// without using NOT operator
function rangeOutside(){
    let age = 33;
    if(age < 14 || age > 90){
        return 'outside the range'
    } else {
        return 'within the range'
    }
}

console.log(rangeOutside());


/**
 * Check the login
 * Write code that ask for login prompt
    * if visiotr enters 'Admin' , then prompt for password git
    * if input is empty , show 'cancelled' 
    * if another string then show 'I don't know'
 
 The password is checked as follows:
    * If it equals “TheMaster”, then show “Welcome!”,
    * Another string – show “Wrong password”,
    * For an empty string or cancelled input, show “Canceled”

    ** use nested if 
 */

 function checkForLogin(){
    const user = prompt("Enter your login details");

    if(user === 'admin'){
        const password = prompt('Enter your Password');
        if(password === '' || !password){
            console.log('Canceled');
        } else if(password === 'TheMaster'){
            console.log('Welcome');
        } else {
            console.log('Wrong Password');
        }
    } else if (user === '' || !user){
        console.log('Canceled');
    } else {
        console.log("I don't know you");
    }


 }

 checkForLogin();