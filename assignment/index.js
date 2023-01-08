// 21. They think of something you could store in a JavaScript Object.
// Write a program that creates Objects containing these items.
// --> OBJECT.
const me = {
    gender : "female" ,
    age : 19 ,
    name : "uroosa" ,  
    "eye-color" : 'brown' ,
};
console.log (me)


var hello = [
    {
        name : 'batool',
        lastName :'uroosa' ,
    },
    {
        name : 'batool2' ,
        lastName : 'uroosa2' ,
    }
]
console.log (hello[0])

// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
//Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
//Error.....
var indexError=[20,"potato",'tomato']
console.log ("index error ")
console.log  (indexError[5])
//correct........
console.log ("index error, Correct: ")
console.log  (indexError[1])












/*var age= 19;
var names = 'uroosa';
var isFeePaid = true;
console.log(typeof age);
console.log(typeof names);
console.log(typeof isFeePaid);*/
/*var firstName = "uroosa";
var lastName = 'batool';
var fullName = firstName + ' '+ lastName;
document.write ('my full name is' + '  ' + fullName);*/
//-----> Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to
//convert the total currency to Pakistani Rupees. Perform all
//calculations in a single expression. (Exchange rates : 1 US Dollar =
//155 Pakistani Rupee and 1 Saudi Riyal = 41 Pakistani Rupee)
/*var dollars = 10;
var riyals = 25;
pak_rupees = (155*10) + (41*25);
document.write("pakistani rupees is " + ' ' + pak_rupees);*/
/*var age = prompt('what is your age : ?');
console.log(age);
var new_age = age + 5 ;
console.log(new_age);
var new_age2 = prompt('what is your age..?');
console.log(new_age2);
var new_age3 = parseInt(new_age2)+ 5 ;
console.log(new_age3);*/




//var num = 7;
//alert  (++num);
//alert  (num++);
// ..............MY HOBBY .............
/*var hobby = prompt("enter your hobby");
if(hobby == "designing"){
   var hobby1 = prompt("enter your interest");
   if (hobby1 =="graphics"){
   alert ("your hobby is less");
   }
   else if (hobby1=="colouring"){
   alert ("you are great");
   }
   else {
    alert("wowww");
   }
}
else if (hobby == "programming"){
    var hobby2 = prompt("enter your interest");
    if(hobby2 == "python"){
        alert("you are good");
    }
    else if (hobby2 == "JS"){
    alert ("you are best");
    }
    else {
        alert("you are something other");
    }
}
else{
    
    alert("you are not in cs field");
}
*/
//  11...........printing names of my friends..............
// Names: Store the names of a few of your friends in a array called names.
//  Print each person’s name by accessing each element in the list, one at a time.
var names = ["Uroosa", "Anum", "Abiha", "Noor"] 
console.log  (names[0])
console.log  (names[1])
console.log  (names[2])
console.log  (names[3])

// 12 ...........printing the Greetings to my friends..............
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
//  print a message to them. The text of each message should be the same, but each message should be 
//  personalized with the person’s name.
var names = ["Uroosa", "Anum", "Abiha", "Noor"] 
// console.log  ("I'm so lucky to have a friend like you"+ ' '+ names[0])
// console.log  ("I'm so lucky to have a friend like you"+ ' ' + names[1])
// console.log  ("I'm so lucky to have a friend like you"+' '+ names[2])
// console.log  ("I'm so lucky to have a friend like you"+' '+ names[3]) 
for(i=0; i<names.length; i++){
    console.log(`I'm so lucky to have a friend like you ${names[i]}`);
}

//13  Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
// and make a list that stores several examples. Use your list to print a series of statements about
// these items, such as “I would like to own a Honda motorcycle.”

fav_transportation = ['car', "airplane" , "heavyBike"]

console.log ("I go to university using" +' '+ fav_transportation[0]) 
console.log ("I travel overseas using" +' '+ fav_transportation[1])
console.log ("I like to ride" +' '+ fav_transportation[2])

// 14 . Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.

var names = ["Uroosa", "Anum", "Abiha", "Noor"] 
for(i=0 ; i <=3 ; i++ ){
    console.log ("Hey..! "+ names[i]+" you're invited to my dinner party.")
}
// 15 . Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send 
// out a new set of invitations.You’ll have to think of someone else to invite.
console.log ("oops Anum can't join us..!")
names.splice(1,1 ,"batool")
// console.log (names)
for(i=0 ; i <=3 ; i++ ){
    console.log ("Hey..! "+ names[i]+" you're invited to my dinner party.")
}

//  16 .More Guests: You just found a bigger dinner table, so now more space is available.
//  Think of three more guests to invite to dinner.

console.log ("Guyz i have a good news , 'i found a bigger dinner Table.'")
names.unshift ("Aileen")
names.splice(2,0 ,"Ellie")
names.push("Fatima")
console.log (names)
for(i=0 ; i <7 ; i++ ){
    console.log ("Hey..! "+ names[i]+" you're invited to my dinner party.")
}

// 17 .Shrinking Guest List: You just found out that your new dinner table won’t arrive in 
// time for the dinner, and you have space for only two guests.
// ---Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list, print a message to that person letting them 
//  know you’re sorry you can’t invite them to dinner.
//'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
console.log ("Sorry guyz , 'I have space for only 2 people' ")
names.pop()
console.log ("Sorry Fatima  , 'I can't invite you' ")
names.pop()
console.log ("Sorry Noor , 'I can't invite you' ")
names.pop()
console.log ("Sorry Abiha  , 'I can't invite you' ")
names.pop()
console.log ("Sorry Batool  , 'I can't invite you' ")
names.pop()
console.log ("Sorry Ellie , 'I can't invite you' ")
console.log(names)
console.log ("Hey..! "+ names[0]+" you're still invited to my dinner party.")
console.log ("Hey..! "+ names[1]+" you're still invited to my dinner party.")
// names.pop()
// names.pop()
console.log(names)
// Dinner Guests 19 : Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.
console.log ("no. of guests coming in dinner," + names.length)

//  18 . Seeing the World: Think of at least five places in the world you’d like to visit.
//Store the locations in a array. Make sure the array is not in alphabetical order.
var places = [" Maldives ", " DisneyLand "," France " , " Switzerland " ," Australia" ]
//Print your array in its original order.
console.log ("The Original Array is: " , '\n' + places)
//Print your array in alphabetical order without modifying the actual list.
var sorted_places = [...places].sort() ; 
console.log ("The Array in Alphabetical order is: " , '\n' + sorted_places )
//show that your array is still in its original order by printing it.
console.log ("The Original Array is" , '\n' + places) 
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log ("The Array in reverse alphabetical order is: " , '\n' + sorted_places.reverse() )
//Show that your array is still in its original order by printing it again.
console.log ("The Original Array is: " , '\n' + places)
//Reverse the order of your list. Print the array to show that its order has changed.
console.log ("My Array in reverse order is: " , '\n' + places.reverse() )
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log ("My Array in reverse order is: " , '\n' + places.reverse() )
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been 
//changed.
console.log ("My Array in alphabetical order (changed order) is: " , '\n' + places.sort() )
// Sort to change your array so it’s stored in reverse alphabetical order. 
//Print the list to show that its order has changed.
console.log ("My Array  is: " , '\n' + places.sort().reverse() )

//  20 .Think of something you could store in a array. For example, you could make a list of mountains, 
// rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a
//  list containing these items.

var my_array = ['DB' ,'DAA' , 'Automata' , 'PST' , 'Marketing']
console.log (my_array)

// 23 . Conditional Tests: Write a series of conditional tests. Print a statement describing each test
//  and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// Look closely at your results, and make sure you understand why each line evaluates to True or False.
// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let my_name = 'Uroosa';
console.log ("Is my_name=='Uroosa' ?, i predict True")
// I predict true here..
console.log(my_name == 'Uroosa')

let my_name1 = 'Anum';
console.log("Is my_name1=='Anum' ?, i predict True")
// I predict true here..
console.log(my_name1 == 'Anum')

let my_home = 'Malir';
console.log("my_home=='Malir'?, i predict True")
// I predict true here..
console.log(my_home == 'Malir')

let num = 5;
console.log ("num == 5, i predict True" )
// I predict true here..
console.log(num == 5)


let number1 = 2 ;
console.log("number1 == 2 , i predict True")
// I predict true here..
console.log(number1 == 2)

//FALSE....

let my_name2 = 'Uroosa';
console.log("my_name2=='uroosa', i predict False")
// I predict false here..
console.log(my_name2 =='uroosa')

let my_home2 = 'malir';
console.log("my_home2== 'MALIR', i predict False" )
// I predict false here..
console.log(my_home2== 'MALIR')


let numF = 5;
// I predict false here..
console.log("Is numF != '5' , i predict False")
console.log(numF==10)

let food = 'Pizza';
console.log ("Is food != 'Pizza'? I predict False.") 
// I predict false here..
console.log(food != 'Pizza') 


//false
var car = 'Civic'
console.log ("Is car == 'Civic'? I predict False.")
console.log (car != 'Civic')

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



// 25 . Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color
 //and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player 
//just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will 
//have no output.)
var alien_color = 'green' ;
if (alien_color == 'green'){
    console.log("yahoo..! you earned 5 points");
}
else if (alien_color == 'pink'){
    console.log("no output");
}
// 26.Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
//---->RUNNING IF BLOCK..
var alienColor = 'green' ;
if (alienColor == 'green'){
    console.log("You earned just 5 points for shooting the alien");
}
else {
    console.log("you earned just 10 points for shooting the alien"); }
//---->RUNNING ELSE BLOCK..
var alienColor = 'pink' ;
if (alienColor == 'green'){
    console.log("you earned just 5 points for shooting the alien");
}
else {
    console.log("You earned just 10 points for shooting the alien");
}
// 27 . Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alienColors = 'yellow'
if (alienColors == 'green'){
    console.log(" You earned just 5 points ");
}
else if  (alienColors == 'yellow'){
    console.log(" You earned just 10 points ");
}
else if  (alienColors== 'red'){
    console.log(" You earned just 15 points ");
}
else{
    console.log(" please choose from the given colours.. ")
}

//  28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age,
//  and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
var person_age = 19 ;
if (person_age < 2 ){
    console.log("The person is a Baby");
}
else if (person_age == 2 ||  person_age < 4){
    console.log("The person is a Toddler");
}
else if (person_age == 4 ||  person_age < 13){
    console.log("The person is a Kid ");
}
else if (person_age == 13 ||  person_age < 20){
    console.log("The person is a teenager");
}
else if (person_age == 20 ||  person_age < 65){
    console.log("The person is an Adult ");
}
else if (person_age == 65 ||  person_age > 65){
    console.log("The person is an Elder ");
}
else{
    console.log("Please enter the right age.")
}
//  29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that
//   check for certain fruits in your array.
//  • Make a array of your three favorite fruits and call it favorite_fruits.
//  • Write five if statements. Each should check whether a certain kind of fruit is in your array.
//   If the fruit is in your array, the if block should print a statement, such as You really like bananas!
 
 var favorite_fruits = ['apple' , 'mango' , 'peach']
 
if (favorite_fruits.includes("apple")) {
    console.log("i really like apple");
}

if (favorite_fruits.includes("mango")) {
    console.log("i really like mango");
}

if (favorite_fruits.includes("peach")) {
    console.log("i really like peach");
}

if (favorite_fruits.includes("banana")) {
    console.log("i dont like bananas!");
}

if (favorite_fruits.includes("Grapefruit")) {
    console.log("i dont like Grapefruit!");
}

//  30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code 
//  that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting
//   to each user:
//  • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//  • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

var user_names = ['rimsha', 'uroosa', 'admin' , 'mahnoor' , 'arshmah' , 'sidra']
for (var i = 0; i < user_names.length ;i++){
    if (user_names[i] == 'admin'){
       console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log('Hello ' + user_names[i] + ' , thank you for logging in again.')
    }
}
//  31 .No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//  • If the list is empty, print the message We need to find some users!
//  • Remove all of the usernames from your array, and make sure the correct message is printed.

var users = ['Ali','Batool','Asgher','ejaz','fatima'];
 while (users.length > 0) {
    users.pop();
}
console.log(`The number of users are ${users.length}`);
if ( users.length == 0) {
    console.log("We need to find some users..!");
};
// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a 
// unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the
//  current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that 
// the person will need to enter a new username. If a username has not been used, print a message saying that the username 
// is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users = ["user1", "user2", "user3", "user4", "user5"]
let new_users = ["user3", "user5", "user6", "user7"]

new_users.forEach((x) => {
    current_users.includes(x.toLowerCase()) ?
        console.log("the person will need to enter a new username"):
        console.log("the username is available")
})





//................................................................................
//................................................................................

// 2. . .Personal Message: Store a person’s name in a variable, and print a message to that person.
//  Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var person_name = "Uroosa";
console.log ('"Hello ' + person_name + '", would you like to learn some javascript Today?"')

// 3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
// uppercase, and titlecase.

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

// 4 .Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its 
// author  Your output should look something like the following, including the quotation marks:

 document.write ('Quaid e Azam M.Ali Jinnah Once Said: <br> "I do not believe in taking the right decision, I take a decision and make it right." ')

//  5 .Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a 
//  variable called famous_person.Then compose your message and store it in a new variable called message.
//   Print your message


var famous_person = 'Quaid e Azam M.Ali Jinnah';
var message = ' "I do not believe in taking the right decision, I take a decision and make it right." ' ;
document.write ('<br>' + famous_person + " once said: <br> " +' '+   message)

//  6 .Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and 
// end of the name. Make sure you use each character combination, "\t" and "\n", at least once. 
// Print the name once, so the whitespace around the name is displayed. Then print the name after striping 
// the white spaces.

var first_name = "Noor" ;
var last_name = "hassan" ;
var a = '\t \t'+ first_name + '\n'+ last_name+'\t \t'
console.log (a);
console.log(a.trim());




// 7 : Number Eight: Write addition, subtraction, multiplication, and division operations that each result
//  in the number 8. Be sure to enclose your operations in print statements to see the results.

//addition:
console.log (5+3)
//subtraction:
console.log (16-8)
//division:
console.log (16/2)
//multiplication:
console.log (8*1)

//  8 : You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
addition:
console.log (4+4)
//subtraction:
console.log (16-8)
//division:
console.log (16/2)
//multiplication:
console.log (4*2)

// 9 . Favorite Number: Store your favorite number in a variable. Then, using that variable, 
// create a message that reveals your favorite number. Print that message.

favourite_number = 13 ;
console.log (favourite_number + " is my Favourite Number.")
