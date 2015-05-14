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

function subtract (){

    var minustotal = firstnumber - secondnumber;

    return (firstnumber + " " + symbol + " " + secondnumber + " = " + minustotal)
}

function multiply (){

    var multplytotal = firstnumber * secondnumber;

    return (firstnumber + " " + symbol +" " + secondnumber+ " = " + multplytotal)
}

function divide (){
var total = firstnumber / secondnumber;
    return  (firstnumber + " " + symbol + " " + secondnumber +" = " + total)
}

// main code

if( symbol === "+"){
    console.log(addition())
}
else if (symbol ==="-"){ console.log(subtract())
}
else if (symbol ==="*"){console.log(multiply())
}
else if (symbol ==="/") if(firstnumber === 0 || secondnumber === 0) console.log("God does not play dice and you can not divide by zero"); else{console.log(divide())}