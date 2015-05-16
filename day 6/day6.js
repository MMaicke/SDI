/**
 * Created by matthewmaicke on 5/16/15.
 */


//fun
var returnaverage

function average(){

//var

    var avg = 0
    var addnum = 0
    var numbers = [5,6,12,14,23,35,50]

//loop

    for (var i = 0; i < numbers.length; i++){

        addnum += numbers[i]

    }
avg = addnum / numbers.length

    return Math.round(avg)
}

returnaverage= average();

    console.log("the ave is" + returnaverage )













alert('this works but why not the array');

function myfirstarray(){
    var popped;
    var names = ["blackbeard","captian kidd","captain morgan","captain jack sparrow"];

  for (var i = 0; i < names.length; i ++ ){

      if (names[i] === "blackbeard"){
    console.log(names[i] + " is my favorite");
}


  }

    console.log("the length of the arrays is " + names.length);


names.unshift("Harlock", "black bart");

    console.log(names);

    popped= names.pop();

    console.log(names);
    console.log(popped+ "is the popped item")

}
myfirstarray();

