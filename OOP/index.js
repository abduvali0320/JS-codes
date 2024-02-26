// // 'use strict';

// function korsat(a, b){
//     function korsat1(){
//         console.log(a + b);
//     }
//     korsat1();
// }
// korsat(45, 40);


// const talaba1 = {
//     ism: "nematjon",
//     yosh: 15,
//     jinsi: true,
//     chiqar: function(){
//         function chiqarchi(){
//             console.log(this.ism);
//         }
//         chiqarchi();
//     }
// };

// talaba1.chiqar();

function talaba(ism,yosh){
    this.ism = ism;
    this.yosh = yosh;
    this.jinsi = true;
}

const nematjon = new talaba('nematjon', '10');

console.log(nematjon);



// var tugma = document.querySelector('.tugma');

// tugma.addEventListener('click', function(){
//     this.classList.toggle("red");
// });