// 45.Cars: Write a function that stores information about a car in a Object. The function should always
// receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color or an optional
// feature. Print the Object that’s returned to make sure all the information was stored correctly.

function Car(manufacturer,modelName,keyword,colour,modelno,automatic_or_manual ) {
    carObj ={
        manufacturer,
        modelName,
        keyword,
        colour,
        modelno,
        automatic_or_manual,
    }
    // console.log(carObj);
    return carObj;
}
let x = Car("honda","civic","attractive","black","2022","automatic")
console.log(x);
let y =Car("KIA","Sportage","attractive","black","2022","manual")
console.log(y);