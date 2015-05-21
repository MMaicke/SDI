//alert("JavaScript works!");


//problem 1


//gobal var

var myemail= "matthew_maicke@fullsail.edu";

var returnemail;


//function

function emails(argemail){
    //loc var

    var at = argemail.indexOf("@");
    var dot = argemail.indexOf(".");
    var secondat = argemail.lastIndexOf("@");
    var space = argemail.indexOf(" ");


    if (at == -1) {

        return false

    }

    else if (dot == -1){

        return false
    }

    else { return true}
}
returnedstring=emails(myemail);
console.log("my email is" + returnemail)

//prob 2


//problem 2

var bombermotto;
var comma;
var slash;

bombermotto = "Bombs,on,target";
comma = ",";
slash = " ";

function hatethislab(first, second, third){
    var newmotto;
    var spacemotto;
    var current;
    var seprate = "";

    newmotto = first;

    spacemotto = newmotto.split(second);

    for(var all in spacemotto){

        current = spacemotto[all];

        for(var char in spacemotto[all]){

            if (char != 0){

                var currentchar = current[char];
                seprate = seprate + currentchar;


            } else {
                seprate = seprate + current[0];

            }

        }
        seprate = seprate + third;

    }
    return seprate;

}

hatethislab(bombermotto, comma, slash);

var returnval = hatethislab(bombermotto, comma, slash);

console.log("Normally bomber squadron mottos is " + returnval + " but Minot's motto is bombs on foreheads");