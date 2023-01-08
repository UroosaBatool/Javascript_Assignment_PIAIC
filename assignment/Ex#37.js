// 37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
//  that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt 
//  of any size with a different message.
function make_shirt(size = "large", text = "I love JavaScript") {
    console.log(`The size of the shirt is ${size} and message is ${text}`)
}
make_shirt("large")
make_shirt("medium")
make_shirt("small","I love programming")