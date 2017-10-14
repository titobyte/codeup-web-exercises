"use strict";

// Basic while loop

function basicWhileLoop() {
    var i = 1;
    while (i < 65536) {
        i = i * 2;
        console.log(i);

    }
}

// Ice cream loop
// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5


function conesSold() {

    var i = 1;

    do  {
        console.log(allCones);
        console.log(Math.floor(Math.random() * 5) + 1);
        i++;

    } while (i < 6);

}
console.log(conesSold()); 