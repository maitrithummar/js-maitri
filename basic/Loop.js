// // for Loop
 

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     // console.log(i);
// }

// // write multipal loop

// for (let i = 0; i <= 10; i++) {
//     // console.log(`outer loop ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`inner loop ${j} and outer loop ${i}`);
        
//     }
    
// }

// // loop on array

// const myarray =['flash' ,'batman','superman']

// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     // console.log(element)
// }

// // break and contionue

// // for (let index = 1; index <= 20; index++) {
// //    if (index == 5) {
// //     console.log(` 5 is Dedected`)
// //     break
// //    }
// //     console.log(`value = ${index}`);
    
// // }



// // for (let index = 1; index <= 20; index++) {
// //    if (index == 5) {
// //     console.log(` 5 is Dedected`)
// //     continue
// //     }
// //     console.log(`value = ${index}`);
    
// // }


// // while Loop
// //  let index =0;
// // while ( index <=10) {
// //     console.log(` value of index is ${index}`)
// //     index = index +2;
    
// // }


// // do while loop
// // let i =1;
// // do {
// //     console.log(`score value ${i}`)
// //     i++;
// // } while (i <= 10);


// // for of Loop

// const arr =[1, 2, 3, 4, 5]

// for (const num of arr) {
//     // console.log(num)
    
// }

// const greating ="hello world"
// for (const great of greating) {
//     // console.log(`each charcter ${great}`)
// }

// //map  and ,ap are use for unique value 

// const map = new Map()

// map.set('ind',"india")
// map.set('us',"Uniated state")
// map.set('fa',"france")
// map.set('ind',"india")

// // console.log(map);
// // for  of Loop
// for (const [key ,value] of map) {
//     // console.log(key ,":-" , value);
// }

// for in loop

// const myogj ={
//     "js": "java script",
//     "cpp": "c++",
//     "rb":"ruby"
// }

// for (const key in myogj) {
//     console.log(`${key} and this are shotcut ${myogj[key]}`)
// }


// for each loop

const coding = ['js','ruby','python','java']

// coding.forEach(  function (iteam){
//     console.log(iteam)
// })

// coding.forEach( (iteam) => {
//     console.log(iteam);
// })


// coding.forEach ( (iteam ,index,arr) =>{
//     console.log(iteam ,index ,arr);
// })


const mycodding =[
    {
        lanuagename : "java",
        lanuagefile : "java"
    },
    {
        lanuagename : "javascript",
        lanuagefile : "js"
    },
    {
        lanuagename : "python",
        lanuagefile : "py"
    }
]
// mycodding.forEach( (index) => {
//     console.log(index.lanuagename);
// })

// filter and if i write in { } then complsaory write return
// const mynum= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  const newnum = mynum.filter ( (num) => num > 4);
//  console.log(newnum);

 //map 

//  const mynum= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // const newnum = mynum.map( (num) => num +10)

// const newnum = mynum
//             .map( (num) => num * 10)
//             .map( (num) => num +1)
//             .filter( (num) => num >=41)

// console.log(newnum)


//reduce 
// const mynum= [1, 2, 3]

//  const newnum= mynum.reduce ( function (acc , curval){
//     return acc + curval
// },0)

// console.log(newnum)


const mynum= [1, 2, 3]

//  const newnum= mynum.reduce ( function (acc , curval){
//     console.log(`acc value ${acc} and curr value ${curval}`)
//     return acc + curval
// },0)

const newnum = mynum.reduce ( (acc, curval) => (acc + curval),0)
// console.log(newnum)

const shoppingcart =[
    {
        coursename : "js course",
        price :299
    },
    {
        coursename : "python",
        price :399
    },
    {
        coursename : "java course",
        price :599
    }
]

 const tottaltopay =shoppingcart.reduce ( ( acc,iteam) =>  acc + iteam.price,0)
 console.log(tottaltopay);