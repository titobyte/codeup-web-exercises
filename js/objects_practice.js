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




function deactivateMembers(arr) {


    arr.forEach(function(member) {


        member.activeMember = false;
        member.dateDeactivated = "2017";

    });



   return members;

}


console.log(deactivateMembers(members));