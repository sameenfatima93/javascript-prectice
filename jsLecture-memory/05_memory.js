// how to work memory 
// we have 2 type of memory
// (1) stack (al primittive type me stack vmemory usy hoti hy jis me origenal ko nhi badl skty us ki copy milti hy jis ko hum change kr skty hen)

let myYoutubeChannel = "coddingQueenYoutubeChannel"
let onotherYoutubeChn = myYoutubeChannel

onotherYoutubeChn = "chaiOurCode"

console.log(onotherYoutubeChn);
console.log(myYoutubeChannel);
// explanation yahan jo primitive data type use howa jb pehly let ki value ko dosri sy override kia to wh origenal nhi bdli balke us ki copy hoi or us copy ko change kia origenal abh bhi mojod rhi 

// heap (no primitive data type ky liye hy jis me orignal hi milta hy or agr change krna ho to origenal hi change hota hy heap sy jb waps reference lyte hen to copy nhi milta orignal value ka reference milta hy)
//example

let userOne = {        // this is object
 Email: "user@googl.com",
 age: 34,
 upi: "user@yblcom"
}
 
let userTwo = userOne

// in object agr hume object ky ander ki ksi value ko target krna hy to just us sy pehly . lga den jesy .email , .age wagera

userTwo.age = 20
console.log(userTwo.age);
console.log(userOne.age);
// yahan pr origenal value bhi change ho gye matlab uper object me age 34 or nechy dosri kr ky 20 ki thi to ab heap yani non primitive data me heap sy value origenal change ho jati hy

  


