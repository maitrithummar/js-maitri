// //object literal
// //decalre symbole

// const sym = Symbol("key1");
// const user = {
//     name : "maitri",
//     [sym] :"key21",
//     age : 22,
//     email :"maitri@gmail.com",
//     city : "surat",
//     islogIn : false
// }

// // console.log(user);
// // console.log(user.email);
// // console.log(user["email"]);
// // console.log(user[sym]);

// // user.email ="abc@gail.com";
// // console.log(user);
// // Object.freeze(user);   //after user frezz value not chnage 
// // user.name ="test";
// // console.log(user);


// user.greatting = function() {
//     console.log("hello js user");
// }

// user.greatting2 = function() {
//     console.log(`hello js user ${this.name}`);
// }
// console.log(user.greatting());
// console.log(user.greatting2());


//object singlton and literater

// const tinderuser = Object()// singlton object 
// const tinderuser ={} //non singlton user


const tinderuser ={}
tinderuser.id="123abc";
tinderuser.name="maitri";
tinderuser.isloagged=true;
tinderuser.email="maitri@gmail.com";
tinderuser.age=22;

// console.log(tinderuser);

const username ={
        fullname : {
            userfullname :{
                firstname :"maitri",
                lastname :"thummar"
            }
        }
}
// console.log(username.fullname);

const obj1 ={1: "a" , 2 :"b"};
const obj2 ={3: "a" , 4 :"b"};

// const obj3 =Object.assign({},obj1 ,obj2);

const obj3 ={... obj1 ,... obj2}

//  console.log(obj3);
// console.log(tinderuser);
//  console.log(Object.keys(tinderuser));
//  console.log(Object.values(tinderuser))
//  console.log(Object.entries(tinderuser))

 


// console.log(a);
// console.log(b);
// var a = b = 200; //output will be on hosting a is undefine and b will be refrence error


const course ={
    name : "js",
    price : 200,
    courseteacher : "test"
}

const{courseteacher: teacher} = course;

// console.log(courseteacher);
console.log(teacher);