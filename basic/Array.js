// const myarr =[1, 2, 3, 4, 5]
// const newarr=["maitri","abc","test"]
// const newarr2 = new Array (1, 2, 3, 4)

// // console.log(myarr[1])
// // console.log(newarr[1])

// //array method

// // myarr.push(6);
// // myarr.pop();

// // myarr.unshift(12)
// // myarr.shift()

// // console.log(myarr.includes(9));
// // console.log(myarr.indexOf(3));

// const array2 = myarr.join();
// console.log(myarr);
// console.log(array2);


const marvalhero =["thore","spiaderman","halk"]
const dchero =["suparman","flash","batman"]

// marvalhero.push(dchero);

// console.log(marvalhero)
// console.log(dchero)

// const newhero =marvalhero.concat(dchero);
// console.log(newhero);

const newhero =[...marvalhero ,...dchero] //spared operater
// console.log(newhero);

const arr =[1,2,3,[4,5],6,7,[3,2],5,6]
const newarr =arr.flat(Infinity);
// console.log(newarr);

// console.log(Array.isArray("maitri")); //check it is arry or not
// console.log(Array.from("maitri")); //convert into arry


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));