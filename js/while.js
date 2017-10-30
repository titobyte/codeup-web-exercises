"use strict";

// Basic while loop

function basicWhileLoop() {
    var i = 1;
    while (i < 65536) {
        i = i * 2;
        console.log(i);

    }
}

console.log(basicWhileLoop());


// // Ice cream loop
// This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
//
//
//     do {
//         var conesOrdered = Math.floor(Math.random() * 5) + 1;
//
//         if (conesOrdered <= allCones) {
//             console.log('the customer ordered ' + conesOrdered + " number of cones");
//             allCones = allCones - conesOrdered;
//             console.log('I sold ' + conesOrdered + " number of cones.")
//         } else {
//             console.log('next customer, please.');
//         }
//
//
//     }   while (allCones > 0);
//
//     console.log("yay, i get to go home b/c I sold all my cones.");