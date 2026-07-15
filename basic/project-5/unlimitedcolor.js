// generate a random color

const randomcolor = function(){
    const hex = '123456ABCDEFG'
    let color = '#'
    for (let i = 0; i <6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
let intervalid

const startchangingcolor = function(){
   intervalid =  setInterval(changebgcolor ,1000);
    function changebgcolor(){
        document.body.style.backgroundColor=randomcolor();
    }
};
const stopchangingcolor = function(){
    clearInterval(intervalid);
    console.log('stoppp')
    intervalid =null;
};


 document.querySelector('#start').addEventListener('click',startchangingcolor);
 document.querySelector('#stop').addEventListener('click',stopchangingcolor);


