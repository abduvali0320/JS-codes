// console.log("talabalar");
// var talabalar = {
//     daraja: "professional",
//     yoshi: "o'rta yoshliklar (15 dan 35gacha)",
//     erkak: 20,
//     ayol: 15,
//     oilaliklar: 17,
// };
// console.log(talabalar);

// console.log("mashina");
// var mashina = {
//     rusumi:"lasetti",
//     mator: 1.5,
//     rangi: "qora",
//     yili:2015,
//     narxi:8000,
//     urilgan:false,
// }
// console.log(mashina);

// console.log("komputer");
// var komputer = {
//     marka:"lenova",
//     xotira:1000,
//     ssd:false,
//     ddr:true,
//     rangi:"silver",
// }
// console.log(komputer);

// console.log("daraxt");
// var daraxt = {
//     nomi: "eman",
//     boyi:1520,
//     kengligi:25,
//     yoshi:157,
//     ogirligi:14000,
// }
// console.log(daraxt);

// console.log("bosh kiyim");
// var shapka = {
//     firma:"lopo",
//     qalinligi:1.5,
//     rangi:"qizil",
//     otkazuvchanligi:0.7,
//     ogirligi:0.4,
// }
// console.log(shapka);
// console.log(" ");
// console.log("massiv");
// console.log("mashinalar");
// var mashinalar = ["lasetti","cobalt" ,"matiz","tiko","kaptiva" ];
// console.log(mashinalar);

// console.log("komputerlar");
// var komputerlar = ["lenova","HP","acer","apple","sony"];
// console.log(komputerlar);

// const test = {
//     ism: "Temur",
//     fam: "olimov",
//     age: 50,
//     foo: function () {
//         console.log(this.ism);
//         console.log(this.name);
//     },
// };
// test.foo.apply({ism:"karim", name:'karimov'});
// console.log(newObj);

// const test_1 = Object.create(test);
// test_1.name = "shokir";
// console.log(test_1);
// "use strict";
// var son = "salom";
// var son = "ds";
// console.log(son);

// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//     setTimeout(() => {
//         console.log("timeout 1");
//     }, 0);
//     Promise.resolve().then(() => console.log("microtask 1"));
//     console.log("listener 1");
// });

// btn.addEventListener("click", () => {
//     setTimeout(() => {
//         console.log("timeout 2");
//     }, 0);
//     Promise.resolve().then(() => console.log("microtask 2"));
//     console.log("listener 2");
// });

// btn.onclick = function () {
//     setTimeout(() => {
//         console.log("timeout 3");
//     }, 0);
//     Promise.resolve().then(() => console.log("microtask 3"));
//     console.log("listener 3");
// };

// function foo() {
//     setTimeout(() => {
//         console.log("timeout 4");
//     }, 0);
//     Promise.resolve().then(() => console.log("microtask 4"));
//     console.log("listener 4");
// }

// btn.click();

// class createUser {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// let str = new createUser("Jasur", 20, 'olimov');

// function CreateUser(name, age) {
//     this.name = name;
//     this.age = age;
//     this.yosh_age = function() {
//         return `ism: ${this.name}, yosh: ${this.age}`
//     }
// }

// let obj = new CreateUser("karim");

// CreateUser.prototype.getAge = function () {
//     return this.age;
// };

// let m = new CreateUser("karim", 5);

// console.log(m.yosh_age());

// function Circle(radius) {
//     this.radius = radius;
// }

// Circle.prototype.getArea = function () {
//     return Math.PI * Math.pow(this.radius, 2);
// };

// const circle = new Circle(5);
// console.log(circle.getArea());

// Object.prototype.uzunlik = function () {
//     return this.length;
// };

// let str = "salom";

// let text = new Object('Xurmo')

// text.__proto__.uzunlik = function () {
//     return this.length
// }

// console.log(text.uzunlik());
// console.log(str.uzunlik());

// var add = (function () {
//     var counter = 0;
//     return function () {
//         counter += 1;
//         return counter;
//     };
// })();

// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());

// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//         // displayName() is the inner function, that forms the closure
//         console.log(name); // use variable declared in the parent function
//     }
//     displayName();
// }
// init();

// let son = 1;
// function oshir() {
//     return son++;
// }

"use strict";



// console.log(oshir());
// console.log(oshir());
// console.log(oshir());

// function k() {
//     console.log(this);
// }
// const k_1 = function () {
//     console.log(this);
// };
// const k_2 = () => {
//     console.log(this);
// };

// k();
// k_1();
// k_2();
