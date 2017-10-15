"use strict";

// Basic while loop

function basicWhileLoop() {
    var i = 1;
    while (i < 65536) {
        i = i * 2;
        console.log(i);

    }
}

// console.log(basicWhileLoop());


// Ice cream loop
// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
// var randomCone = Math.floor(Math.random() * 5) + 1;
//
//  var coneVal = function conesSold() {
//
//         var i = 1;
//
//         do  {
//             console.log(allCones);
//             console.log(randomCone);
//             i++;
//
//         } while (i < 1);
//
//
//
//      if (randomCone === 1) {
//          return "one cone sold";
//      } else if (randomCone === 2){
//          return "two cones sold";
//      }  else if (randomCone === 3) {
//          return "three cones sold";
//      }
//
//
//
//  }
//
//
//
//
//
// coneVal();
//
