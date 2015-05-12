/**
 * Created by matthewmaicke on 5/12/15.
 */


//99 bottles

for (var pop = 99; pop >= 1; pop --) {

    if (pop === 1) {
        console.log(pop + " bottle fo pop on the wall");
        console.log(pop +" bottle of pop");}
    else {
    console.log(pop + " bottles fo pop on the wall");
    console.log(pop +" bottles of pop")}
    ;
    console.log("take one down pass it around");

        if (pop > 2) {
        console.log((pop-1)+ "bottles of pope on the wall");}
        else if  (pop ==1) {
            console.log ("no more bottles of pop on the wall");
        } else {
    console.log((pop - 1)+ " bottles of pop on the wall")};
console.log ("");}