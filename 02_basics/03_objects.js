// objects can be declare using two ways--> literal and constructor 

//  singleton --> creation of object using constructor. 
// object.create 

// object literal 

const mySymbol = Symbol("key1")

 const jsUser = {
   name: "amit",     // "name"       // key value is string type " "
   "full name": "amit bishnoi",
   mySymbol : "mykey1",
    [mySymbol] :  "key1",
  age: 20,
  loction: "haryana",
  isLoggedIn: false,
  email: "amitbishnoi@gmail.com", 
  
}

// object value access
console.log(jsUser.email)       // good way
console.log(jsUser["emial"]) ;   // better way

console.log(jsUser["full name"])
console.log(typeof jsUser.mySymbol)
console.log(jsUser[mySymbol])

// object value change
jsUser.email = "amit@google.com"

// object value lock
// Object.freeze(jsUser) 
jsUser.email = "amit@microsoft.com"

console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user")
}
console.log(jsUser.greeting)  //function will not exicute, only its referance output 
console.log(jsUser.greeting()); // execute

//Stirng interplutation //
jsUser.greetingTwo = function(){
console.log(`hello js use , ${this.name}`)
}
console.log(jsUser.greetingTwo());