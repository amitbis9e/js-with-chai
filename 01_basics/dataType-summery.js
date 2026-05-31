// Types of Data Type 
/* Premative  7 ---> string, boolean , null , number ,
      undefined , Symbol, BigInt */

const isLoggedIn = false
const outTemp = null               // empty
let userMail;                       // undefined

const id = Symbol('123')            // return type is also a 'Symbol' dataType 
const anotherId = Symbol('123') 

console.log(id === anotherId)       // Symbol's are not equal //false

const bigNumber = 12324543n   

/*  Non premative (Referance) ----> Array , object , function */


//Array
const classMate = ["ankit" , "rahul" , "jatin"]

// Object
 let myObj = {
    name: "amit",
    age: 24,
 }

//funciton
 let myFunction = function(){
    console.log("This is a function")
 }

 console.log(typeof myFunction)
    // Return type of non-premative datatype is function
    // Return type of function is ObjectFuction 

    console.log(typeof bigNumber) // bigInt    // bigint
    console.log(typeof outTemp)   // null       // object
    console.log(typeof userMail)  // undefined  // undefined
    console.log(typeof anotherId) // Symbol    // Symbol

    /* ------> Return DataType of Null is Object
            And  Return type of function we call ObjectFuction  <----- */

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Memory location 
// Stack (premative dataTypes)       Heap (non-premative dataTypes)
  // copy the vaule                     referacne (original value)

  // Stack Memory
  let age = 22
  let myAge = age
  console.log(myAge)
  
  myAge = 23
  console.log(age)
  console.log(myAge)

  //Heap Memory

  let userRahul = {
     name: "Rahul",
     upi : "rahul@ypl"
  }
  
  let userTony = userRahul
  userTony.name = "Tony"      //changes the orignal value 
  console.log(userRahul)  
   
  // variable referance of heap is stroed in stack

