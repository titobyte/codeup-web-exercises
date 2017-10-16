"use strict";

// Bonus 1

// var favoriteDay = prompt('Whats your favorite day of the week?');
//
// function dayMessage(theDay) {
//
//         if  (theDay === "Monday"){
//             return "Mondays are the worst";
//
//          } else  if (theDay === "Tuesday") {
//
//             return "Tuesdays are cool";
//
//         }  else  if (theDay === "Wednesday"){
//
//             return  "Wednesday is hump day";
//
//         }  else  if (theDay === "Thursday") {
//
//             return "Thursday is one day away from Friday";
//
//         }  else  if (theDay === "Friday"){
//
//             return "TGIF";
//
//         }  else  if (theDay === "Saturday"){
//
//             return "I love Saturday!";
//
//         }  else if (theDay === "Sunday") {
//
//             return "Sunday funday";
//         }
//
//
// }
//
// alert(dayMessage(favoriteDay));
//


// Switch Case

    // function dayMessage() {
    //
    //     switch(favoriteDay){
    //         case "Monday":
    //             return "Mondays are the worst";
    //             break;
    //         case "Tuesday":
    //             return "Tuesdays are cool";
    //             break;
    //         case "Wednesday":
    //             return "Wednesday is hump day";
    //             break;
    //         case "Thursday":
    //             return "Thursday is one day away from Friday";
    //             break;
    //         case "Friday":
    //             return "TGIF"
    //             break;
    //         case "Saturday":
    //             return "I love Saturdays!";
    //             break;
    //         case "Sunday":
    //             return "Sunday Funday";
    //             break;
    //     }
    // }
    //
    // alert(dayMessage(favoriteDay));

// Bonus 2


var number = parseInt(prompt('Enter a number'));

    function notNum(num) {
        if (isNaN(num)) {
            alert('This is not a number');
        } else {
            alert("This is a number");
        }
    }


    notNum(number);

// Bonus 3

// var enterSeason = prompt('Enter a season');
// var enterMonths = prompt('Enter a month');
//
// function season (input) {
//
//    switch (enterSeason) {
//        case "Spring":
//            alert('March, April, May');
//            break;
//        case "Summer":
//            alert('June, July, August');
//            break;
//        case "Fall / Autumn":
//            alert('September, October, November');
//            break;
//        case "Winter":
//            alert('December, January, February');
//            break;
//
//            switch (enterMonths){
//                case: "March" && "Mar":
//                    alert('')
//                     break;
//
//            }
//    }
//
//




    // if (input === "Spring") {
    //     "March, April, May"
    // }  else if (input === "Summer") {
    //     "June, July, August"
    // }  else if (input === "Fall / Autumn") {
    //     "September, October, November"
    // }  else if (input === "Winter") {
    //     "December, January, February"
    // }
    //

}
