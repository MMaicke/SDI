//alert("JavaScript works!");


//lab 7

//var

var set1 = [10, 6, 7, 3, 12, 5];
var set2 = [25, 100, 4, 22, 16, 105, 2, 7];
var set3 = [2, 3, 4, 1, 10, 27, 32, 51, 6, 100, 8, 42];
//funct
function Sort(set1)
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < set1.length; i++) {
            if (set1[i] > set1[i+1]) {
                var temp = set1[i];
                set1[i] = set1[i+1];
                set1[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return set1
}
function Sort(set2)
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < set2.length; i++) {
            if (set2[i] > set2[i+1]) {
                var temp = set2[i];
                set2[i] = set2[i+1];
                set2[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return set2
}
function Sort(set3)
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < set3.length; i++) {
            if (set3[i] > set3[i+1]) {
                var temp = set3[i];
                set3[i] = set3[i+1];
                set3[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return set3
}

Sort(set1);
Sort(set2);
Sort(set3);
console.log(set1);
console.log(set2);
console.log(set3);