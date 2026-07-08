function one(){
    const username ="maitri"

    function two(){
        const website ="email"
        // console.log(username);
    }

    // console.log(website);

    two();
}

one();

function addone( num){
    return num+ 1
}

addone(5);

const addtwo = function (num){
    return num +2
}
addtwo(10);


//This keyword  and  this keyword refer current context
// this current context vat kre 

const user ={
    username : "maitri",
    price :299,


    message : function(){
        console.log(`${this.username} , welcome to website`);
    }
   
}
// user.message();
// user.username="test";
// user.message();


// const chai = function(){
//     username : "maitri";
//     console.log(this.username);
// }

// chai();

// Arrow funcation 

// const chai = () =>{
//     username : "maitri";
//     console.log(this.username);
// }
// chai();

// const num = (num1 ,num2) =>{
//     return num1 +num2;
// }

// if user { } then write return 
// if not use then do not write below are ex use => function

// emplicite return 
// const num = (num1 ,num2) => num1 +num2;


// const num = (num1 ,num2) => (num1 +num2);

// if return object complsory use ( )
const num = (num1 ,num2) => ({username:"maitri"});

// console.log(num(5,6));



// imidate invoke function experession(IIEF)
// if we want to imidate call funcation run then use () to wrap funcation and end of exectution also use ();

// or chai is name IIFE

(function chai (){
    console.log("db connected")

})();

// simple IIFE
(  (name) =>{
    console.log(`db connected two ${name}`)

})("maitri");
