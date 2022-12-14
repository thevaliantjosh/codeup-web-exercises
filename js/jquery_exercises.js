"use strict"

console.log("jQuery Exercise");


// $(function() {
//     //grabbing the content of the id of #codeup and displaying that string to an alert.
//     let contents = $("#codeup").html();
//     //grabbing the class .important and changing the css
//     $(".important").css({
//         "background-color": "#FF0",
//         "width": "fit-content",
//         "font-weight": "bolder"
//     });
//     // alert(contents);
//     // alert("The DOM has finished loading!");
//     //adjusting the font size of all the elements of "h1" and "h2"
//     $("h1, h2").css("font-size", "2rem");
//
//     $("*").css("border", "1px solid $F00");
//
//
// });

// $(document).ready(function(){
//
// })

//Selectors Exercise
// $(function() {
//     let $contents = $("h1").html();
//     $(".codeup").css("border", "1px solid red");
//     $("li").css({
//         "fontSize": "20px",
//         "textDecoration": "underline"
//     });
//     $("h1, p, li").css("background-color", "#FF0");
//     alert($contents);
//     //adding click() events
//     $("#button1").click(function(){
//         alert(`The Event 1 button with id of "button1" was clicked!`);
//     })
// });

//Mouse Events Exercise

$(function() {
    $("h1, h2, h3").click(function () {
        if ($(this).hasClass("highlighter")) {
            $(this).removeClass("highlighter")
        } else {
            $(this).addClass("highlighter");
        }
    })
    //setting font size to 18px when double clicked
    $("p").dblclick(function () {
        $(this).css("fontSize", "18px");
    })
    //setting the text color to red when the mouse is hovering
    $("li").hover(function (){
        $(this).addClass("red-text");
    }, function(){
        $(this).removeClass("red-text");
    })

});







