//alert("JavaScript works!");






//prob 3





function days(argday){



    var firstdate = new Date(2015, 5, 23);

    var seconddate = new Date (2015, 10, 23);


    dateDiff = firstdate-seconddate;

    dateDiff= dateDiff / 1000 / 60 / 60 / 24;

    day = Math.floor(Math.abs(dateDiff));


    return day



}


days();

console.log("As of May 23 there are " + day + " days till the release of Call of Duty Black Ops III");