/**
 * Created by matthewmaicke on 5/19/15.
 */

//
////alert("it works")
//
//
//function authorfunction() {
//
//    var teams = ["bears", "bulls", "cubs", "sox"];
//
//    var colors = ["orange and blue", "red and white", "blue and white", "white and black"];
//
//    for (var i = 0; i < teams.length; i++) {
//
//        console.log("the chicago " + teams[i] + " colors are " + colors[i]+".");
//
//    }
//
//    teams.push("fire");
//    colors.push("red and blue");
//
//
//}
//
//
//

//problem



//gobal var
var numberedarray = [ 1,2,3,4,5,6,7,8,9,10,11,12];
var returnedarray = [];
var userprompt = prompt("enter 'odd to return odd numbers or  'even' to return even numbers.")

while(userprompt != "odd" && userprompt != "even"){ userprompt= prompt( "hey dumbass i said odd or even")


}


//function

function evenarray ( argarray,oddoreven){
    //local var
    var newarray= [];
    var modnum;
    var zeroorone;

    if (oddoreven === "odd") {

        zeroorone = 1

    }else {zeroorone = 0

    }

    for (var i =0; i < argarray.length; i++){

        modnum = argarray[i] % 2;
//even
        if (modnum === zeroorone){

            newarray.push(argarray[i]);

        }

    }
//console.log(argarray);
return newarray
}

//code

returnedarray = evenarray (numberedarray,userprompt);

console.log( "the " +userprompt+ " array is " + returnedarray);