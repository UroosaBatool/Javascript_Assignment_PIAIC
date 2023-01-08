// 42.Great Magicians: Start with a copy of your program from Exercise 39. Write a function called 
// make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
//  Call show_magicians() to see that the list has actually been modified.
let magiciansNames = ['Mubi','tommy','ellie','pinky'];
function show_magicians(magician) {
    magician.forEach(m => {
        console.log(m);
    });
}
function make_great(magicians) {
    magicians.forEach((m, u) => {
        magiciansNames[u] = `${m} The Great`
    })
    return magiciansNames
}
console.log(make_great(magiciansNames));
show_magicians(magiciansNames)
