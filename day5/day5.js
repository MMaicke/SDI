/**
 * Created by matthewmaicke on 5/14/15.
 */


    //gobal var


var gobalname = "bob";
var returnedvaluevariable;
var checkedname;

//functions
function namefetcher(){


    var myname= prompt("enter your name:");

//    console.log( "hello there " + myname);

    return myname;


}

function namechecker(nameargument){

 var truename;

   if (nameargument=== "optimus") {
       truename = true
   }else{
       truename = false
   }
    return truename;


}

//main code
returnedvaluevariable = namefetcher();
checkedname = namechecker(returnedvaluevariable)

if (checkedname) {console.log("greeting and welcome")}
else{ console.log("intruder")}



//console.log("the name checker function recevied " + checkedname)













//var foo = 1;
//var bar = 2;
//var baz = 3;

//console.log (foo+""+bar+""+baz)



//alert("itworks")

/*
//prob 1

var fullprice = 12;
var discount = 5;
var age;

age = parseInt(prompt("enter the age of the customer"));

if (age >= 55 || age < 10) { console.log("your discounted price is" + (fullprice - discount));

} else { console.log(" no discount please pay "+ fullprice);

}


//prob 2

var frontright = parseFloat(prompt("enter the psi for the from front right tire"));
var frontleft = parseFloat(prompt("enter the psi for the from front left tire"));
var rearright = parseFloat(prompt("enter the psi for the from rear right tire"));
var rearleft = parseFloat(prompt("enter the psi for the from rear left tire"));

if (frontright === frontleft &&  rearleft=== rearright)  {
    console.log("tire pressure meets the standard")
} else {
    console.log("tire pressure does not meet the standard")
}


for ( var i = 0; i < 4; i++){
if  (i ===0)
tirelocation = "front right"

tirelocation = "front left"





 */