"use strict";



var members = [
    {
        joined: 2009,
        name: "John",
        activeMember: true
    },
    {
        joined: 2011,
        name: "Sally",
        activeMember: true
    },
    {
        joined: 2013,
        name: "John",
        activeMember: true
    }
];


// Exercise 1

// function deactivateMembers(arr) {
//
//
//     arr.forEach(function(member) {
//
//
//         member.activeMember = false;
//         member.dateDeactivated = "2017";
//
//     });
//
//
//
//    return members;
//
// }


// console.log(deactivateMembers(members));




//---- EXERCISE 2
// 1. Define an object, "canOfSoda", using dot syntax to add and assign the following properties:
// - a property of isEmpty assigned a boolean value of false
// - a property of isOpen assigned a boolean value of false
// - a method of open() which sets the isOpen to true if the property is false when the method is initially called
// - a method of pourOut() which sets the isEmpty to true if the isEmpty property is false and the isOpen is true
// 2. Define the above object again using object literal syntax.
//     BONUS
// 3. Create an array call cansOfSoda containing of 3 canOfSoda objects with the same properties and values as described above.
//     The objects should be named, canOfSoda1, canOfSoda2, canOfSoda3.
// 4. Iterate over the cansOfSoda array and open() and pourOut() each canOfSoda object
// 5. Console log the cansOfSoda array to check if the methods worked correctly.

var canOfSoda = {};

canOfSoda.isEmpty = false;
canOfSoda.isOpen = false;


function open() {

    if(!canOfSoda.isOpen) {
        canOfSoda.isOpen = true;
    }

}

canOfSoda.pourOut = function () {
    if(!canOfSoda.isEmpty && canOfSoda.isOpen){
        canOfSoda.isEmpty = true;
    }
};


canOfSoda.pourOut();
canOfSoda.open = open;



