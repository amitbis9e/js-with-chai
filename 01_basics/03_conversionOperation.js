// dataTypes conversion confusion
let age = 20
let score = "33abc"

console.log(typeof score)  
console.log(typeof(score))

let valueInNumber = Number(score)

console.log(typeof valueInNumber)
console.log(valueInNumber)              

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = ""

let valueInLogged = Boolean(isLoggedIn)
console.log(valueInLogged)   
// 1 => true; 0 =>false
// "" => false 
//"amit" => true

let anyNumber = 33;
let stringNumber = String(anyNumber)
console.log(typeof stringNumber)
console.log(stringNumber)

// Number converted into stirng but string shows as number 



/* **************** operations in String    ************* */
let value = 10
console.log(value + 5)

// console.log(5+5)
// console.log(5-5)
//console.log(5*5)
//console.log(5%5)
//console.log(5/5)

let str1 = "hello"
let str2 = " amit"
console.log(str1 + str2)   // Everything goes smooth till now <-----

// lets make some catch in string operational rules
console.log("2" + 2)  // 22
console.log(2 + "2")  // 22

console.log("1" + 2 +2) //==> 122     IF String First all treat as a String
console.log(1 + 2 + "2") // ==> 32    Before sting Numbers add up 

/* ====> Tricky converstion <===== */
    // zero readability ... zero consistancy

console.log(2 + 3 * 5 -1)
console.log("" + 5)
// console.log(++ true)
console.log("")
  // Read about pre increment and post increment .... pref Mdn