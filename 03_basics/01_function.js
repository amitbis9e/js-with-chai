//         // here number1 and number2 is parameters while fu n defination 
// function addTwoNumber(number1 , number2){ 
//       console.log(number1 + number2);
// }
// // Here 3,4 is arrguments while on fun call
// addTwoNumber(3,4)



function addTwoNumber(number1 , number2){ 
    //  let result = number1 + number2
    //  return result

    return number1+number2

     console.log("amit") // after return, nothing can print
}
const result = addTwoNumber(3,5)
//console.log("result: ",result); 

//ways of argument and parameters

function loginUserMessage(username){
    if(!username)//(username === undefined)
        {
          console.log("Plese enter username")
          return 
        }
        return `${username} just logged in`
}

//console.log(loginUserMessage("amit"))
//console.log(loginUserMessage()) // undefined just logged in

//******** we wanna to add more and more iteams */
function calculateCardPrice(val1, val2,... num1){   // rest operator
    return num1
}
// console.log(calculateCardPrice(500 , 400, 150,30));
                        //     val1, val2, ...num1


//Object pass in funciton
const user = {
    username: "amit",
    price: 200
} 

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)
// juarai nhi object bnake fr pass krege direct   
handleObject({
    username: "sam",
    price: 150
})

// array pass in object
const newArray = [19,293,494,59]
function returnSecValue(getArray){
    return getArray[1]
}
// console.log(returnSecValue(newArray))
console.log(returnSecValue([19,293,494,59]))
