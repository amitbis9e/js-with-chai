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