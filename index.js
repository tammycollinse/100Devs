//Lets get this shit going

//What is object oriented programming?

//REVIEW

//what is a program
//what is a programming language
//we have variables, declaration and assignment
//we have conditional syntax . multiple conditions
//what are functions => nice review in eloquent JS book
//loops
//what  are arrays => data structures, array indexing
//array methods => re-evaluate and really pay attention to all these array methods
//you always have to ensure that your js file is linked to your html

function arrayReverse(array){
    for (let i = array.length; i > array.length -1; i--){
        console.log(array.length-1)
    }
}// lol we could also use the arr.reverse() method. Damn lmao it does work though

function someNumbers(arr1,arr2){
   //we need to tally up the some of the arrays

//    let totalArr1 = arr1.reduce((a,b)=>{
//     return a + b;
//    })

//    let totalArr2 = arr2.reduce((a,b) => {
//     return a + b
//    }) <----- misunderstood the question

let totalArr1  = 0
let totalArr2 = 0

for (let i = 0; i < arr1.length-1 ; i++){
    totalArr1 = totalArr1 + arr1[i] ** 2 
}

for (let j =0 ; j < arr2.length -1; j++){
    totalArr2 = totalArr2 + arr2[i] ** 3
}

if (totalArr1>totalArr2){
    return true
} else {
    return false
}
}
//there is a way more effective solution`   `````````````

function otherSolution(a,b){
    return a.reduce((acc, current)=> acc + current**2, 0) > b.reduce((acc, current) => acc + current**3, 0)
} // the floating 0 belongs to the reduce method , note that reduce always returns a singular value

//NEED TO GET COMFORTABLE WITH ARRAY METHODS THIS IS VERY IMPORTANT

function someMoreNumbers(array){
let counter = 1
const newFilteredArr = array.filter(arrElement => 
    { //filter grabs the element, index and the array... hmmmm so interesting
        //can adjust the callback function to include the parameters
      arrElement % arrElement[counter] == 0 // can something other than the counter condition go in here??
     //counter++??
    })


    return newFilteredArr
}

 // this will use array methods to create a new array

//SHARPENING AND PLAYING AROUND WITH SOME CSS
//spelling and grammar rules, the css syntax

//every block is known as a rule, and in every rule we have a selector
//we have DECLARATIONS in the code blocks, the have properties and values

//-------------------OBJECT ORIENTED PROGRAMMING-----------------------// CLASS 30

//What are objects? A combination of methods and variables

//what does OOP bring to the table and add value to my journey as a software engineer
//some review
//objects represent the attributes and behavior of something used in a program
//object vairables are called properties and object functions are called methods
//objects store ''keyed'' collections

//feeling lost with constructors and classes so let's review with #100Devs
//OBJECTSSSSS


//some basic review
function logHighAndLow(n1,n2,n3){
    let min = Math.min(n1,n2,n3)
    let max = Math.max(n1,n2,n3)
    console.log(`The lowest number is ${min} and the highest value is ${max}`) //this is known as bling syntax 
}

function randomStuff(){
    let result = Math.random() //returns a value between 0-1
    if(result < 0.5){
        return 'heads'
    } else {
        return "tails"
    }
}

function lastQuestion(num){
    for(let i = 0 ; i <= num ; i++){
      let result = randomStuff()
      console.log(result)
    }
}
//NB is the array iteration methods, such as MAP/FILTER/FIND ETC
//other array methods such as pop/shift/unshift etc

function sumSecongHighestAndSecondLowest(arr){
    let sortedArray = arr.sort((a,b)=> a-b)
    console.log(sortedArray[1] + sortedArray[sortedArray.length - 2])
}

//DELVING INTO OBJECTS
//Objects are known to have properties (ATTRIBUTES), that might be variables to be assigned

//Objects also have METHODS described as behaviors=> functions that manipulate the properties and those values etc, eg, start() stop()

//example of an object

let stopwatch = {} //this is an object literal

stopwatch.currentTime = 12

stopwatch.tellTime = function(time){
    console.log(`the current time is ${time}`)
} //this is a method because it is a function, method is a value that has a function

stopwatch.tellTime(stopwatch.currentTime)

//THIS IS CLASS 22, SOME REVIEW AND SOME PRACTICE AND EXPANSION ON OBJECTS

function favDrink(){
    let favOne = "My fav drink is Diet Coke and Water"
    favOne = favOne.trim() // a method that removes the white spaces (did not know that,damn)
    console.log(favOne)
}

let string = "This is a tester string that is supposed to check for the words for the word apple" // my solution to this was more complicated
let check = string.includes("apple")
//there is another way of solving this
console.log(string.search("apple")) //this returns the index of where the search item was found

if (check === true){
    return "this sentence includes the word 'apple"
} else {
    return "this sentence does not include the word apple"
}

function rockPaperScissors(){
    let result = "";
}