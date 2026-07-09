// if statment



// const isloginuser  = true

// if(2 == 3 ){
//  console.log("executed");
// }

// > ,< ,<=, >= ,==, !=,===,!==

//else statment

// const temepratr =45;
// if(temepratr === 45){
//     console.log("temeprater is less then 45")
// }else{
//     console.log("tempreter is greater then 45")
// }
// console.log("exectuted")

// short if statment 
// const balance =1000
// if (balance > 500) console.log("test");


//nested loop

// if (balance < 750) {
//     console.log("less then 750");
// }else if(balance < 850){
//     console.log("less then 850")
// }else if (balance < 950){
//     console.log("less then 950");
// } else {
//     console.log("less then 1200"); 
// }


// const userloggin =true
// const debitcard = true
// const islogingoogle = false
// const isemailloggin =true

// if (userloggin && debitcard) {
//     // console.log("user allow to buy course");
// }

// if (isemailloggin || islogingoogle) {
//     console.log("user are allow to access");
    
// }else{
//     console.log("first log in google");
// }


// Switch statment

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 3;

// switch (month) {
//     case 1:
//         console.log("january")
//         break;
//     case 2:
//         console.log("feb")
//         break;
//     case 3:
//         console.log("march")
//         break;
//     case 4:
//         console.log("april")
//         break;

//     default :
//         console.log("print defult month")
//         break;
// }

const useremail = "m@maitri.ai"

// if (useremail) {
//     console.log("got user mail")
// }else{
//     console.log("not have user email")
// }

// falsy value 

// false , 0 ,-0 ,BigInt 0n, null ,undefined ,NaN ,""

//truthy value 
//"0" ,'false' ," " ,[] ,{} ,function(){}

// check array is empty or not 
 const email =[]

 if (email.length === 0) {
    console.log("array is empty")
 }

// check object is empty or not
 const empobj ={}

 if (Object.keys(empobj).length===0) {
    console.log("object is empty")
 }

 //nulish coalescing opertor (??) always return null or undefine 


let val1;
// val1 = 5 ??10;
// val1 = null ?? 10;
val1 = undefined ?? 15;

// console.log(val1);

// Terniary operator

// condition ? true : false

const icetruprice =100

icetruprice <=80 ? console.log("less then 100") : console.log("greater then 100");