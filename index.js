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
//there is a way more effective solution

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