//alert("JavaScript works!");


var returnedLot;
var input;
var power = "p";
var quick = "q";

function lotto (arggen) {

    var array = [];

    if (arggen === quick){


        for (var i = 0; i < 7; i++) {


            array[i] = Math.floor((Math.random() * 53) + 1);
        }

    }
    else if (arggen === power) {

        for (var i = 0; i < 6; i++) {

            array[i] = Math.floor((Math.random()) * 59 + 1);

        }
        array[i] = Math.floor((Math.random()) * 35 + 1);



    }
return array

}


input = prompt("for quick pick numbers enter 'q' or for  power ball enter 'p'");


