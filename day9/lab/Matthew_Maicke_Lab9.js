//alert("JavaScript works!");

//prob 1
var number = 1;
var decminal= 3
function dec(argdec){


    newnumber = number.toFixed(decminal);



return newnumber



}

dec();

console.log("In video games anything prior to "+ newnumber+ " versions of a game is usually demo or some kind of trial like betas or alphas");



//prob 2


//var

var string = "23";


function conversion(){

newstring=parseInt(string)

double = newstring+newstring
return double


}

conversion();

console.log("the number is " + string + " it went into a function as a string data and came out as a number data. To prove this I have double the number " + double);


//
//
////prob 3
//
var firstdate = new Date(2015, 5, 23);

var seconddate = new Date (2015, 10, 23);


//func
function days(argday){


//local var



    dateDiff = firstdate-seconddate;

    dateDiff= dateDiff / 1000 / 60 / 60 / 24;

    day = Math.floor(Math.abs(dateDiff));


    return day



}


days();

console.log("As of May 23 there are " + day + " days till the release of Call of Duty Black Ops III");