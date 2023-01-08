// 24.  More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want
//  to try more comparisons, write more tests. Have at least one True and one False result for each 
//  of the following:

// • Tests for equality and inequality with strings
//equality..
let its_my_name = 'I am Uroosa';
console.log ("Is its_my_name =='I am Uroosa' ?, i predict True")
console.log(its_my_name == 'I am Uroosa')
//inequality
let its_my_name1 = 'I am Uroosa';
console.log ("Is its_my_name1 =='I am Uroosa' ?, i predict false")
console.log(its_my_name1 == 'I am not Uroosa')
// • Tests using the lower case function
//--> FALSE
let its_my_home = 'karachi';
console.log("its_my_home== 'karachi', i predict False" )
console.log(its_my_home== 'KARACHI')
//-->TRUE
let its_my_home1 = 'karachi';
console.log("its_my_home1 == 'karachi', i predict True" )
console.log(its_my_home1== 'karachi')

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
// and less than or equal to
//-->TRUE
let my_number = 4 ;
console.log("my_number == 4 , i predict True")
console.log(my_number == 4)
//-->FALSE
let my_number_8 = 7 ;
console.log("my_number_8 == 4 , i predict false")
console.log(my_number_8 == 4)
// • Tests using "and" and "or" operators
//---->AND
//TRUE..
let no_1 = 2 ;
let no_2 = 4 ;
console.log(no_1 == 2 && no_2 == 4)
console.log(no_1 + no_2)
//FALSE..
let no_10 = 2 ;
let no_20 = 4 ;
console.log(no_10 == 2 && no_20 == 9)
console.log(no_10 + no_20)
//---->OR
//TRUE..
let no_30 = 2 ;
let no_40 = 8 ;
console.log(no_30 == 2 || no_40 == 5)
console.log(no_30 + no_40)
//FALSE..
let no_31 = 2 ;
let no_41 = 8 ;
if (no_31 == 9 || no_41 == 5){
console.log(no_31 + no_41)
}
else{
    console.log("numbers are incorrect")
}

// • Test whether an item is in a array
var cars = ["Mehran" , "Corolla" , "Alto" , "city"]
console.log( cars.includes('Mehran'));

// • Test whether an item is not in a array
var car1 = ["Mehran" , "Corolla" , "Alto"]
console.log( car1.includes('civic') );
