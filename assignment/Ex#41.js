// 41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.
let magicians_names = ['Mubi','tommy','ellie','pinky'];
function show_magicians(magician) {
    magician.forEach(m => {
        console.log(m);
    });
}
show_magicians(magicians_names);