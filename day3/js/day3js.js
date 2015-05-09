/**
 * Created by matthewmaicke on 5/9/15.
 */

//alert("javascript works")


//initial var

var myname = "Matt";
var newname = "";
var lastname = "";

//prompt

newname = prompt("please type in your name:");

//condition

if (newname === myname)
    {lastname = prompt("please enter last name");
    if (lastname === "Maicke") {
        console.log("greetings " + myname +" "+ lastname);}

    else {console.log("are you sure you should be on here?")

    }
        } else { console.log ("intruder")}




//new var

var mynumber = 0
var secondnumber = 5

mynumber = parseInt(prompt("enter the number 5"))
if (mynumber === secondnumber){ console.log ( "they match")}
else {console.log( "they data types are wrong")}