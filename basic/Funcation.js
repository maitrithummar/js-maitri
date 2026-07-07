function myname (){
    console.log("m");
    console.log("a");
    console.log("i");
    console.log("t");
    console.log("r");
    console.log("i")
}

// myname()

// function addtwonumber(number1 ,number2){ //in this number1 and number2 is parameter
//     console.log(number1 + number2);
// }

// addtwonumber(3 ,8) //in this 3 and 8 are argument



function addtwonumber(number1 ,number2){ //in this number1 and number2 is parameter
    // let result = number1 + number2
    // return result; // after return nothing print

    return  number1 + number2;
}

 const result = addtwonumber(3 ,8) 

//  console.log("Result :", result);

 function usermessage (usermsg ="test"){
    // if(usermsg === undefined)
        if(!usermsg)// also write like this 
        {
        // console.log("enter your name")
        return
    }
    return `${usermsg} user just logging`
 }

//  console.log(usermessage("maitri"));

//  console.log(usermessage("maitri"));


function calaculatecartprice (... num1){ //... this is rest oprateor to pass multipal value give us as like a bunndal (Arra)
 return num1;
}

// console.log(calaculatecartprice(100,200,500,600,800))


const user ={
     name :"maitri",
     price :299
}

function handleobject (anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`)
}

handleobject(user);


const newarray =[100,200,300]

function returnnewvalue (getarray){
    return getarray[1]
}
console.log(returnnewvalue(newarray));