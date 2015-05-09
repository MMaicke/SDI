//alert("JavaScript works!");

//matthew maicke lab 3

//step one


var myname               = "Matt";

var favoriteNFLTeam      = "\"DA Bears\"";

var favoritenumber       = 13;

var theNFLBearsAreCursed = false;

var newname = "";

var newnumber = ""

var answer = ""
// step two

console.log("My name is " + myname);
console.log("My favorite team is " + favoriteNFLTeam);
console.log('My favorite number is ' + favoritenumber);
console.log( "Some people believe that the Bears are cursed this is "+ theNFLBearsAreCursed);

//step three

newname = prompt("please type in your name:");

//step four

if (newname === myname)
//step five A

{newnumber = parseFloat(prompt("what is your favorite number "));
    if (newnumber === favoritenumber) {
        console.log("greetings " + myname);}
    else {console.log("no that was last weeks favorite number")}}


else {theNFLBearsAreCursed = confirm( "do you think the bears are cursed? click ok for yes and cancel for no.");
       if (true === theNFLBearsAreCursed)
    {console.log("ah ah ah you didn't say the magic word")}
else { console.log ("your not the right user but at least you're a bears fan")}}