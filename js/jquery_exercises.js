$(document).ready(function(){
"use strict";


//Exercise 1
$('h1').click(function () {
    $(this).css('background-color','red');
});

// Exercise 2
$('p').dblclick(function () {
    $(this).css('font-size', '18px');
});

//Exercise 3
    $('li').hover(
        function () {
        $(this).css('color', 'red');
    },
        function () {
        $(this).css('color', 'black');

        }

    );


});
