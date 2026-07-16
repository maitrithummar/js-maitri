// const promisone = new Promise(function(resolve ,reject){
//     setTimeout(function(){
//         console.log("hello")
//     },1000)
//     resolve()
// })

// const { use } = require("react")

// promisone.then(function(){
//     console.log("world")
// })


// new Promise (function(resolve,reject){
//     setTimeout(function(){
//         console.log("promise 2 make")
//         resolve();
//     },1000)
// }).then(function(){
//   console.log('promise 2 resolve');  
// })

// const promisethree = new Promise (function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: 'maitri', email :'maitri@gmail.com'})
//     },1000)
// })
// promisethree.then(function(user){
//     console.log(user)
// })


// const promisefour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false
//         if (!error) {
//             resolve({username : 'maitri', password :123})
//         }else{
//             reject('error : somting went wrong')
//         }
//     },1000)

// })

// promisefour.then((user) =>{
//     console.log(user);
//     return user.username;
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=> console.log("promise reject or resolve"))


// const promisefive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true
//         if (!error) {
//             resolve({username : 'js', password :123})
//         }else{
//             reject('error :  js went wrong')
//         }
//     },1000)

// })

// async function promicefive (){
// try {
//      const reposnefive = await promisefive
//       console.log(reposnefive)  
// } catch (error) {
//     console.log(error)
// }  
// }
// promicefive()

// async function alluser (){
//    try {
//      const user =await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await user.json()
//     console.log(data)
//    } catch (error) {
//     console.log('E :',error)
//    }
// }alluser()


fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>{
     return response.json()
}).then((data)=>{
    console.log(data)
})
.catch((error)=> console.log("error here"))