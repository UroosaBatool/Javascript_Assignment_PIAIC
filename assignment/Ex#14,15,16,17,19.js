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