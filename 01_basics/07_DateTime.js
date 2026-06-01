// Dates

const myDate = new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());

console.log(typeof(myDate))    //object

const castomDate = new Date(2001, 0 , 15 , 5, 2)         // in js mounths start from zero
console.log(castomDate.toDateString());

let anotherDate = new Date("09-13-2002")        // custom format in js support    yyyy/mm/dd or  mm/dd/yyyy
console.log(anotherDate.toLocaleString())

let timeStamp = Date.now()
console.log(timeStamp);                       // time till 1970 jan in millsec
console.log(castomDate.getTime());            // time till 09-13-2002  millisec

//---------------------------->>>>> wanna time in secounds
console.log(Date.now()/1000);                         //.decimal
console.log(Math.floor(Date.now()/1000));             //remove decimal

/////////////////////////////////////////////////////////////////////////
let newDate = new Date();
console.log(newDate.getDay()+1)           // methonds getday mounth

// coustmize format 
console.log(newDate.toLocaleString('default', {
    weekday: "long",

                                 // fully customize
}))
