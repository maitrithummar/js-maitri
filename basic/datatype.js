//primitive

let myyoutubename ="maitri";

let anothername=myyoutubename;

 anothername= "test"

console.log(myyoutubename);
console.log(anothername);


//nonprimitive

let userone ={
    email: "test@gmail.com",
    upi: "test@bi"
}

let usertwo=userone;

usertwo.email= "abc@gmail.com";

console.log(userone);
console.log(usertwo);


let user="maitri"
let user2="test"

console.log(`hi my name ${user} and i am working on ${user2}`);

const newstring ="   maitri   +";
console.log(newstring);
console.log(newstring.trim());

const url ="https//maitri%20thummar.com";
console.log(url.replace("%20" , "-"));

console.log(url.includes("maitri"));
console.log(url.includes("test"));