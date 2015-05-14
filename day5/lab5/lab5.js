//alert("JavaScript works!");


//var

var firstnumber  = parseFloat(prompt("enter the first number."));
var secondnumber = parseFloat(prompt("enter the second number."));
var symbol       = prompt("please enter + - / or *");

//functions

function addition (){
var sumtotal = firstnumber + secondnumber;

    return(firstnumber + " " + symbol + " " + secondnumber + " = " + sumtotal)
}
/*function subtract (minus){
var total = firstnumber +- secondnumber;
return minustotal
}
function multiply (times){
    var total = firstnumber +* secondnumber;
return multplytotal
}
function divide (divide){
var total = firstnumber +/ secondnumber
    return dividetotal
}
*/
// main code

if( symbol === "+"){
    console.log(addition())
}