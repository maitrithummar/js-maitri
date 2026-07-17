

// function user(username,loggincount,isloggin) {
//     this.username = username;
//     this.loggincount = loggincount;
//     this.isloggin = loggincount
// }

// const { use } = require("react")

// const userone = new user("maitri", 12 , true);
// const usertwo =  new user('dhara',13, false);
// console.log(userone);
// console.log(usertwo);


// function multiply (num){
//     return num*5
// }
// multiply.power=2

// console.log(multiply(5))
// console.log(multiply.power)
// console.log(multiply.prototype)


// function createuser (username ,score){
//     this.username=username
//     this.score=score
// }

// createuser.prototype.increment = function(){
//     this.score++
// }

// createuser.prototype.printme = function(){
//     console.log(`score is ${this.score}`)
// }
// const chai = new createuser("chai",25)
// const tea = new createuser("tea",250);

// chai.printme();
// tea.printme();

//prototype
let name ="maitri   "
let classone ="hello  "

Object.prototype.truelength= function(){
    // console.log(`${this}`);
    // console.log(`true length is ${this.trim().length}`)
}
name.truelength();
classone.truelength();
"chai".truelength();

// 

//inheritance 

// const teacher = {
//     makevideo : true
// }

// const teachingass ={
//     isava : false
// }

// const tasuppot={
//     makeassi : "js program",
//     fulltime : true,
//     __proto__ :teachingass
// }

// const user ={
//     name : "chai",
//     email :"google.com"
// }

// teacher.__proto__ = user

// //modrn syntex

// Object.setPrototypeOf(teacher,teachingass);


function setuser (username){
    this.username = username;
}

function createuser (username ,email, password){
    setuser.call(this ,username)
    this.email =email,
    this.password= password
}

const chai = new createuser("maitri","maitri@gmail.com",123)
console.log(chai)