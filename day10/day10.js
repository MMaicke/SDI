///**
// * Created by matthewmaicke on 5/26/15.
// */
//
//
//
////glob var
//
//var firstnumber = prompt("please enter a number:");
//
//var returnednumber;
//
//
//var numtoformat= prompt("please enter a number to format")
//var numbfordec = prompt(" plese enter a number of dec")
//
//function decformat(argnum,argdec) {
//    return argnum.toFixed(decPlaces);
//
//
//
//}
////
////function convertnumber(argnumber){
////
////
////
////        while (isNaN(argnumber)){
////
////            argnumber = prompt("no i said enter a number")
////
////
////        }
////
////    return parseFloat(argnumber)
////
////    }
////
//
//
////
////
////
////returnednumber = convertnumber(firstnumber)
////
////console.log("the returned number is ")
//
//returnednumber = decformat(numtoformat,numbfordec);
//
//console.log("the number that is formated is" + returnednumber
//
////
////
//
//
//var dateone= new Date("5/23/2015");
//var secdate = new Date("5/23/2112");
//var days= ("days");
//
// function datediff( date1, datetwo, hoursdays){
//
//     var difference = Math.abs(firstdate - seconddate)
//
//     if (days === "hours") {
//
//
//         difference = Math.round(difference / 100 / 60 / 60)
//
//     }else { difference= Math.round(difference / 100 / 60 / 60/24)
//
//
//
//
// }
//
//returneddate= datediff(dateone,datetwo,sdays);
//console.log("the diffrence is"+ returneddate);


//
////var
//var returnednumber;
//
//    //function
//
//
//    function yearsbetween(){
//
//        var yearentered = parseInt(prompt("enter a year"));
//
//        var today = new Date();
//
//        today = today.getFullYear()
//
//        var difference = today - yearentered;
//
//
//return difference
//
//
//
//
//}
//
//returnednumber=yearsbetween();
//
//console.log("the differnce in years is "+ returnednumber);









var numarray = [3,6,7,9,23,42,22,50]
var num = 21
var returnNumber


function findnumber(argarray,argnumber){

    var nextGreatest = 0

    for (var i = 0; i < argarray.length; i++){

        console.log(argarray[i])

    }


}

returnNumber = findnumber(numarray,num)

console.log("the next highest is " + returnNumber)