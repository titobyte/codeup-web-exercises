"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 *  > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name){
    return  'Hello, ' + name;
}

console.log(sayHello("Tito"));


/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */


var helloMessage = sayHello("Tito");
console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */


var myName = "Tito";

console.log(sayHello(myName));



// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 *  > isTwo(1) // returns false
 *  > isTwo(2) // returns true
 *  > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

console.log(random);

function isTwo(aNumber) {
    if (aNumber === 2) {
        return true;
    } else {
        return false;
    }
}

var retval = isTwo(random);

console.log(retval);

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Example:
 * > calculateTip(0.20, 20) // returns 4
 */


function calculateTip (num, per) {
    return (num/100)*per;
}


console.log(calculateTip(20, 15));

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */



var userInputBill = prompt('How much was your bill?');
var userInputTip = prompt('what percentage tip would you like to leave?');



alert('Ok, ' + calculateTip(userInputBill, userInputTip)+ ' should be your tip');

// Basic function writing practice:

// 1) Make a function called returnTwo() that returns the number 2 when called
// ---Test this function with console.log(returnTwo())

    function returnTwo() {
        return 2;
    }

    console.log(returnTwo());

//
//     2) Make a function called returnName() that returns the string of your name
// ---Test this function with console.log(returnName())

    function returnName() {
        return "Tito";
    }

    console.log(returnName());

//
//     3) Make a function called addThree() which takes in a number input and returns the number plus 3. Remember to define a parameter.
// ---Test this function with console.log(addThree(5))
//
    function addThree(num) {
        return num + 3;
    }

    console.log(addThree(5));

//     4) Make a function called sayString() which returns the string input passed in.
// ---Test this function with console.log(sayString())

    function sayString(input) {
        return input ;
    }

    console.log(sayString('Hello'));

//     5) Make a function called sayHowdy() which console.logs the string “Howdy!”
//     ---Test this function by directly calling sayHowdy()
// ---Remember this function does not need a defined return value


    function sayHowdy() {
        console.log('Howdy!');
    }

    sayHowdy();