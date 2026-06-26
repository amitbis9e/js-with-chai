// singleton object ||  using constructor


const tinderUser = new Object(); // singleton Object

const tinderUserTwo = {}; // non-singleton Object

tinderUser.id = "123abc";
tinderUser.name = "sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser); 

const activeUser = {
    email : "amitbishnoi@gmail.com" ,
    name: {
        fullname: {
           firstname:"amit",
           lastname:"bishnoi"
        }
    }
}
console.log(activeUser.name.fullname.lastname);

// Additation of two Objects
const obj1 ={
    name: "amit",
    age: 20
}
const obj2 = {
    age : 23,
    email: "amitbishnoi@gmail.com"
}

                                        //Jo object baad me spread hoga, 
                                        // wahi same key ki value ko overwrite karega
// const obj3 = Object.assign({}, obj1, obj2 )  // old way .assign({target}, sourse)
const obj3 ={...obj1, ...obj2}
console.log(obj3);
      
// jab database se objects ayege who arrey of object ki form me ayege

const users = [
    {
        id: 1,                 //0
        name: "rohan"
    },
    {
         id: 2,               //1
        name: "mohan"
    },
     {
         id: 3,                //2
        name: "sohan"
    },
{

}
] ;

console.log(users[2].name);

// important --> method  --> output will be in array 

console.log(Object.keys(tinderUser));    // array form output
console.log(Object.values(tinderUser)); // so can use loops
console.log(Object.entries(tinderUser)); // array of [key: value]

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
