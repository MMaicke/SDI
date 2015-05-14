//  NAME:  Enter your name here
//  DATE:  Enter the current date
// Scalable Data Infrastructures
// Day 4 Lab
//  Assignment 1
//  Using logical operators

/*

var p;
var q;
var r;

p = confirm("First value:  Click OK for true or Cancel for false.");
q = confirm("Second value:  Click OK for true or Cancel for false.");
r = confirm("third value:  click ok for true or cancel for false.")
if (p ||(q||r)) {
    console.log("With " + p + " and " + q + " and "+ r +", the outcome is TRUE.");
} else {
    console.log("With " + p + " and " + q + " and "+ r + ", the outcome is FALSE.");
};




// problem 1


var youth =10;
var senior =55;
var age = ""

age = parseFloat(prompt("type in age"))

if (age <= youth||age >= senior){
console.log("price $7.00")}
else {console.log("price $12.00")}
*/

// problem 2

var fronta = "";
var frontb = "";
var backa  = "";
var backb  = "";



fronta = parseFloat(prompt("enter front right pressure"));
frontb = parseFloat(prompt("enter front left pressure"));
backa = parseFloat(prompt("enter rear right pressure"));
backb = parseFloat(prompt("enter rear left pressure"));

if (fronta === frontb && backa === backb){ console.log ( "meets standard")}
else {console.log( "does not meet standard")}
