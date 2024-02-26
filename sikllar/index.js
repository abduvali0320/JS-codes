// var a = 10, b = 10;
// if (a > b){
//     console.log("a soni " + a + " katta ");
// }
// else if(a < b){
//     console.log("b soni " + b + " katta");
// }
// else{
//     console.log("bu sonlar oz'aro teng");
// }

// var d = 10;
// if(d > 0){
//     console.log("bu son musbat");
// }
// else if(d < 0){
//     console.log("bu son manfiy");
// }
// else{
//     console.log("bu son nollga teng");
// }

// var f = 10, g = -10;
// var p = +prompt("10 yoki -10 sonlar orasida emasligini biling");
// if(f > p && g < p){
//     console.log("bu son oraliqga tegshli");
// }
// else if(f = p){
//     console.log("bu son " + f + " ga yani chegaraga teng");
// }
// else if(f = g){
//     console.log("bu son " + g + " ga yani chegaraga teng");
// }
// else{
//     console.log("bu oraliqga tegishli emas");
// }

// var h = 50;
// if (h >= 100){
//     console.log("mashinada tezlik " + h + " tezlik yuqori");
// }
// else{
//     console.log("mashinada tezlik " + h + " tezlik meyorida");
// }

// var l = 10, m = 15, n = 25;
// if((l + m) > n){
//     console.log("sonlar yigindisi n dan katta");
// }
// else if((l + m) < n){
//     console.log("sonlar yigindisi n dan kichik");
// }
// else{
//     console.log("sonlar yigindisi n ga teng");
// }


// var n = prompt("chegarani kiriting");


// let S = 0, i;
// for(i = 1; i <= n; i++){
//     S = S + i;
// }
// console.log("i = " + i + " S = " + S);

// var k, n;
// k = prompt("qaysi sonni takrorlamoqchisiz")
// n = prompt("necha marta takrorlamoqchisizz")
// for(let i = 1; i <= n; i++){
//     console.log(i);
// }

// var a = 10, b = 15, j = 1;
// for(let i = a; i <= b; i++){

//     console.log(j++ +" -- " + i);
// }
// console.log(j-1 + " ta");

// var a = 10, b = 20, j = 1;
// for(let i = b - 1; i > a; i--){
//     console.log(j++  + " -- " + i);
// }
// console.log(j - 1 + " ta ");

// var b = 1, i;
// c = prompt("konfetning narxini kiritng")
// for(i = 1; i <= 10; i++){
//     console.log(i/10 + " kgmi " + i/10   * c + " so'mdan");
// }

// var a, b, i, s = 0, p = 1, k = 0;
// a = +prompt("boshlang'ich sonni kiriting");
// b = +prompt("chegarani kiriting");
// for(i = a; i <= b; i++){
//     s = s + i;
//     p = p * i;
//     k = k + (i * i);
// }
// console.log("yig'indisi " + s + " ga ko'paytmasi " + p + " kvadratini yig'indisi " + k);

// var m, n, i, s = 1;
// b = +prompt("chegara sonni kiriting")
// n = +prompt("butun son kiriting");
// for(i = 0; i <= b; i++){
//     m = n + i;
//     s = s + (m * m);
//     console.log(s-1);
// }
// var n, i, s = 1;
// n = 4;
// for (i = 0; i <= n; i++){
//     s = (s + i / 10) * (-1);
//     console.log(s);
// }

// console.log("sonni yozuv holatida chiqarish");
// var son = prompt("sonni kiriting");
// var birliklar = son % 10;
// var onliklar = parseInt((son / 10) % 10) * 10;
// var yuzliklar = parseInt((son / 100) % 10) * 100;
// var mingliklar = parseInt(son / 1000) *1000;
// switch(mingliklar){
//     case 1000: console.log("bir ming");break;
//     case 2000: console.log("ikki ming");break;
//     case 3000: console.log("uch ming");break;
//     case 4000: console.log("to'rt ming");break;
//     case 5000: console.log("besh ming");break;
//     case 6000: console.log("olti ming");break;
//     case 7000: console.log("yetti ming");break;
//     case 8000: console.log("sakkiz ming");break;
//     case 9000: console.log("to'qqiz ming");break;
//     default: console.log("");
// }
// switch (yuzliklar){
//     case 100: console.log("bir yuz");break;
//     case 200: console.log("ikki yuz");break;
//     case 300: console.log("uch yuz");break;
//     case 400: console.log("to'rt yuz");break;
//     case 500: console.log("besh yuz");break;
//     case 600: console.log("olti yuz");break;
//     case 700: console.log("yetti yuz");break;
//     case 800: console.log("sakkiz yuz");break;
//     case 900: console.log("to'qqiz yuz");break;
//     default:console.log("");
// }
// switch (onliklar){
//     case 10: console.log("o'n");break;
//     case 20: console.log("yigirma");break;
//     case 30: console.log("o'ttiz");break;
//     case 40: console.log("qirq");break;
//     case 50: console.log("ellik");break;
//     case 60: console.log("oltimish");break;
//     case 70: console.log("yetmish");break;
//     case 80: console.log("sakson");break;
//     case 90: console.log("to'qson");break;
//     default:console.log("");
// }
// switch (birliklar){
//     case 1: console.log("bir"); break;
//     case 2: console.log("ikki"); break;
//     case 3: console.log("uch"); break;
//     case 4: console.log("tort"); break;
//     case 5: console.log("besh"); break;
//     case 6: console.log("olti"); break;
//     case 7: console.log("yetti"); break;
//     case 8: console.log("sakkiz"); break;
//     case 9: console.log("toqqiz"); break;
//     default : console.log("");
// }


// var a = 1, i = 0, b = 10, c = 5;
// for(i; i <= b; i++){
//     a = a * c;
//     console.log(a);
// }

// var a = 1, i = 1, n = 10, m = 5;
// for(i; i <= n; i++){
//     a = a + Math.pow(m, i);
// }
// console.log(a); 

// var s = 0, a, i = 0, n = 10, m = 5;
// for(i; i <= n; i++){
//     a = Math.pow(m, i) * Math.pow(-1, i);
//     s = s + Math.pow(m, i) * Math.pow(-1, i);
//     console.log(a); 
// }
// console.log("yigi'indisi = " + s + " ga teng");


// console.log("faktarialni hisoblash");
// var a = 1, i = 1, n;
// n = +prompt("qaysi sonni faktariali kerak")
// for(i; i <= n; i++){
//     a = a * i;
//     s = s + a;
// }
// console.log(n + " fakatarial " + a + " ga teng");

// console.log("faktarialni yig'indini hisoblash");
// var a = 1, i = 1, n, s = 1;
// n = +prompt("bir taqsim qaysi songacha yig'indi kerak")
// for(i; i <= n; i++){
//     a = a * i;
//     s = s + 1 / a;
//     console.log(s);
// }

// var a = 0, i = 1, n = 10, x = 10, s = 1, m = 1;
// for(i; i <= n; i++){
//     a = Math.pow(x, i);
//     s = s * i;
//     m = m + (a / s);
//     console.log(m);
// }


// chiqmadi "23-24-27-28"
// var n = 10, x = 5,  i = 1, a = 0, s = 1, m = 1, b = 1;
// for(i; i <= n; i++){
//     b++;
//     a = Math.pow(x, i) * (Math.pow(-1, b - 2));
//     i+=1;
//     console.log(a);
// }

// var n = 10, x = 5,  i = 1, a = 0, s = 0, m = 1, b = 1;
// for(i; i <= n; i++){
//     b++;
//     a = Math.pow(x, i) * (Math.pow(-1, b - 2));
//     s = s + (a / i);
//     console.log(s);
// }

// var n = 10, x = 5,  i = 1, a = 0, s = 0, m = 0, b = 1, v = 0, l = 1;
// for(i; i <= n; i++){
//     b++;
//     a = Math.pow(x, i) * (Math.pow(-1, b - 2));
//     i +=1;
//     v++;
//     m =(2 * v - 1);
//     l = a / m;
//     console.log(l);
// }




// let kitobSoni = +prompt("siz nechta kitob o'qigansiz");
// const kitobxon = {
//     soni: kitobSoni,
//     muallif: {},
//     nomi: {},
//     janr: [],
//     yoqdi:false
// };
//     for (let i = 0; i < 2; i++){
//     const a = prompt ("qaysi kitobni o'qigansiz?"),
//           b = prompt ("kitobga necha ball  berasiz?");

//           if(a != null && b != null && a != "" && b != "" && a.length < 50){
//           kitobxon.nomi[a] = b;
//           console.log("bajarildi");
//           }
//           else{
//               console.error("xato");
//               i--;
//           }
//     }
//         console.log(kitobxon);

// function kopaytmaTopish(b){
//     let k = 0;
//     let a = 1;
//     for(let i = 1; i <= b; i++){
//         k = (i / 10 + 1);
//         a = a * k;
//     }
//     console.log(a);
// }
// kopaytmaTopish(10)

// var a = 2, b = 25, c = 4, x = 1; 
// for (let i = Math.abs(b - a)/c; i >= 0; i-- ){ 
//     x = c * i; 
//     console.log(x);
// }

// var text = "salom DUNYO";
// var son = "120.554px";
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());
// console.log(text.slice(6,11));
// console.log(text.substring(2, 5));
// console.log(text.substr(7, 4));
// console.log(text.indexOf("l"));
// console.log(parseFloat(son));
// console.log(parseInt(son));
// console.log(text.length);
// console.log(son.length);


// function birinchi(){
//     setTimeout(function(){console.log("1"); }, 1000);
// }
// function ikkinchi(){
//     console.log("2");
// }

// birinchi();
// ikkinchi();

