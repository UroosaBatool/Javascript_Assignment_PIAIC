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