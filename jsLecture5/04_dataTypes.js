// *******operaton*********//

let value = 4
let negValue = -value // -(minus ky sign sy) sy koi bhi value minus me convert ho jati hy  jesy yahan value sy pehly minus lga diya
//  console.log(negValue);
// console.log(3%5);

// concrinate //
let str1 = "sameen"
let str2 = " fatima"
let str3 = str1 + str2;
//  console.log(str3);

// console.log(true); // khali true true hy 

//console.log(+true); // true ky sath + lgaden to wph answer 1 dyga true apny ap me boolean hy ap ny us me conversion krna hy incriment krna hy

//console.log(+""); // is ky answer men 0 aaye ga


// ********dataTypes*********//

// 2 types of data//
// (1) primitve data taype 

//example//

//    i) String
let userName = "ali" //string

//    ii) Number
let userNumber = 234876 // number
let userScore = 2348.7 // number

//   iii) boolean
let isLogedIn = true // boolean yes or no

//  iv)  null 
let outSideTemp = null  // null abhi koi temperature nhi hy khali hy 0 nhi khali
console.log(typeof outSideTemp);


// v)  undefined
let userEmail; // undefined aesy bhi likh skty hen yani abhi value defined nhi hy 
let StudentEmail = undefined; // aesy bhi likh skty hen undefined yani value nhi pata

// console.log(typeof StudentEmail); // undefined


// vi) symbol 
const id = Symbol('123') // symbol ka kam yehi hy value dykhny me same lgy gi pr same nhi hogi 
const onotherid = Symbol('123')
// console.log(id === onotherid);
// console.log(typeof onotherid); // symbol
 
// vii) bigInt
const bigNum = 1234564356798654389765n
// console.log(typeof bigNum); // bigInt


// (2) non primitive (reference) data type

//  i) arry
 const heros = ["shaktiman","naagraj", "doga"] // is [] brecket me arry hoty is tarha likhty 

//  console.log(typeof heros);

 //  ii) object 

 {
   name: "sameen";
   age: 30;
 }

 
 // object is tarha bhi likha ja skta hy or is ko ksi variable me bhi likh skty is tarha 

 let myObj = {
   name: "sameen",
   age: 30,
 }
// console.log(typeof myObj);

 // iii) function

 const myFunction = function(){
    // console.log("hello world");  
 }
// how to find any data type use typeof 
//console.log(typeopf myObj)






