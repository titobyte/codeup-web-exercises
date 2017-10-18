"use strict";


// For loop exercises

// function showMultiplicationTable(num) {
//
//     for(var i = 1; i <= 10; i += 1){
//         console.log(num + " x " + i + " = " +(num * i));
//     }
//
//
// }
//
//
// showMultiplicationTable(1);
// showMultiplicationTable(2);
// showMultiplicationTable(7);
//


//Exercise number 3


for (var i = 1; i < 10; i++) {

    var randomNumber = Math.floor(Math.random() * 180) + 20;

    if (randomNumber % 2 == 0) {
        console.log(randomNumber + " is even");
    } else {
        console.log(randomNumber + " is odd.");
    }



}





/*

for(var i = 1; i <= 9; i += 1) {

    var numberStr = i.toString();
    var output = numberStr.repeat(i);
    console.log(output);

}


 */


//Exercise number 4

// for (var i = 1; i <= 9; i++) {
//
//     var numLog = "";
//
//
//     for (var j = 1; j <= i; j++){
//
//         numLog += i;
//
//     }
//
//     console.log(numLog);
//
// }
//




// Exercise number 5

// for (var i = 100; i >= 5; i = i -5) {
//     console.log(i);
// }
//
//
