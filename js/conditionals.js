"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

/* ########################################################################## */

    // functions

    function isEven(num) {
        if (num % 2 === 0) {
            return "Even";
        } else {
            return "Odd";
        }
    }

    function pHundred(num) {
        return parseInt(num) + 100;
    }

    function numPosOrNeg(num){
        return num >= 0;
    }

    function notNum(num) {
        if (isNaN(num)) {
             alert('This is not a number');
        } else {
             alert("This is a number");
        }
    }


    if (window.confirm("Would you like to enter a number?")) {

        var numPlaceholder = prompt("Can you enter a number?");
        alert("That number is " + isEven(numPlaceholder));
        alert("Plus one hundred " + pHundred(numPlaceholder));
        alert("that number is " + numPosOrNeg(numPlaceholder));
        notNum(numPlaceholder);

        } else {
            alert("Bye!");
        }




/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


    function analyzeColor(colorStr) {
        if (colorStr === 'blue'){
            return "blue is the color of the sky";
        } else if (colorStr === 'red') {
            return "Strawberries are red"
        } else  if (colorStr === 'yellow') {
            return "The sun is yellow";
        } else  if (colorStr === 'green') {
            return "the grass is green";
        } else  if (colorStr === 'indigo') {
            return "indigo is weird";
        }   else {
            return "violet is my favorite color";
        }
    }
    console.log(analyzeColor());

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

    console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */


function analyzeColorSwitch() {


    switch(randomColor) {
        case "blue":
            return  "blue is the color of the sky";
            break;
        case "red":
            return "Strawberries are red";
            break;
        case "yellow":
            return"The sun is yellow";
            break;
        case "green":
            return"the grass is green";
            break;
        case "indigo":
            return "indigo is werid";
            break;
        default:
            return"violet is my favorite color";
            break;
    }
}

console.log(analyzeColorSwitch());


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */



    var colorInput = prompt("Can I get a color?");
    alert(analyzeColor(colorInput));



/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `caculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


    var luckNum = Math.floor(Math.random() * 5);

    function caculateTotal(luckNum, totalAmount) {

        if (luckNum === 0) {

            return totalAmount;

        } else if (luckNum === 1) {

           return totalAmount * .9;

        } else  if (luckNum === 2) {

            return totalAmount * .8;

        } else  if (luckNum === 3) {

            return totalAmount * .7;

        } else  if (luckNum === 4) {

            return totalAmount * .5;

        } else  {

            return 0;
        }

    }

    console.log(caculateTotal(luckNum, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
    // Generate a random number between 0 and 6
    var luckyNumber = Math.floor(Math.random() * 6) + 1;


    var totalAmount = parseInt(prompt("What is your total bill?"));

    alert("Your lucky number is " + luckyNumber);
    alert("Your total is " +  totalAmount);
    alert("Your discount is " + caculateTotal(luckyNumber, totalAmount));


