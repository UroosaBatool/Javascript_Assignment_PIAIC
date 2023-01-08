// 43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy 
// of the array of magicians’ names. Because the original array will be unchanged, return the new array and
//  store it in a separate array. Call show_magicians() with each array to show that you have one array of the
//   original names and one array with the Great added to each magician’s name
let magiciansNames = ["jack", "tim", "cook", "sam"];

function show_magicians(magicians) {
    magicians.forEach((mag) => {
        console.log(mag)
    })
}
show_magicians(magiciansNames)


function make_great(magicians) {
    let newArray = []
    magicians.map((m) => {
        newArray.push(`${m} The great `)
    })
    return newArray

}

let NewMagiciansNames = make_great(magiciansNames);
console.log(NewMagiciansNames);
show_magicians(magiciansNames)
