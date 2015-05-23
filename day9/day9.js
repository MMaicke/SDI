///**
// * Created by matthewmaicke on 5/23/15.
// */
//
//
////alert("works")
//
//
////globe var
//var myemail = "mmaicke@fullsail.com";
//var emailistrueorfalse;
//
//
////function
//function checkemail(argemail){
//
//
//    var goodemail=false
//    var at =argemail.indexOf("@");
//    var dot = argemail.lastIndexOf(".");
//    var space = argemail.indexOf(" ");
//    var lastat = argemail.lastIndexOf("@");
//
//
//    //atsymbol === lastat && at != -1
//    if (at === lastat) { goodemail=true;
//    }else{
//
//        return=false;
//
//    }
//
//if (dot > -1 && dot > at){
//
//
//    goodemail=true
//}else{
//
//    return=false
//}
//if (space == -1){
//    goodemail = true
//}else{
//
//    return=false}
//
//   return goodemail
//
//
//
//}
//
////code
//emailistrueorfalse = checkemail(myemail)
//
//console.log(emailistrueorfalse)


//lab2

//var oldstring="a,b,c,d,e";
//var firstsep = ",";
//var newsep= "/";
//
//
//function stringsep(oldstring,firstsep,newsep){
//    var newstring= "";
//
//    for (var i =0; i < oldstring.length; i++){
//
//        if (oldstring[1]=== firstsep) {
//
//            newstring = newstring + newsep;
//        }else{
//
//            newstring= newstring+oldstring.substring(i,1);
//
//        }
//    }
//
//    oldstring = oldstring.replace( ",", "/")
//
//
//    console.log(oldstring[i]);
//}
//
//
//



function gooddate(){

    var mydate = "5/23/2015";


    var newdate = new Date(2016, 5, 23);

    var seconddate = new Date (mydate);

 dateDiff = newdate-seconddate;

    dateDiff= dateDiff / 1000 / 60 / 60 / 24;




    console.log(dateDiff);

}
gooddate();
//
//function mathmethods(argprompt){
//
//    //var myrandom = Math.floor(Math.random() *(50-10) - 10);
//while (isNaN(argprompt)){
//
//    argprompt = prompt("i said enter a number dumbass")
//}
//
//    var newage= parseInt(argprompt);
//
//
//    console.log(newage);
//
//
//
//}
//
//
//
//var myprompt= prompt("enter your age:")
//mathmethods(myprompt);