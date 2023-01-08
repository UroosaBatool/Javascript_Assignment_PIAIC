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