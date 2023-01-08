var person_name = "uroosa" ;
//UPPER CASE:
console.log("The UPPER case is ," + person_name.toUpperCase());
//lower case:
console.log("The lower case is ," + person_name.toLowerCase());
//Title Case:
var first =  (person_name.charAt(0));
var first_capital = (first.toUpperCase());
var remaining = (person_name.slice(1));
console.log ("The Title case is, " + first_capital  + remaining )