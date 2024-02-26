// var a  = [], b = 2;
// for (let i = 0; i <= 20; i++){
//     a [i] = Math.pow(b, i)
// }
// console.log(a);
// var a = 3, i = 0, b = [];
// for (i; i < 10; i++){
//     a = a + 3;
//     b [i] = a;
// }
// console.log(b);
// var a = "10";
// console.log(typeof(+ a));
// console.log(typeof(parseInt(a)));
// console.log(typeof(Number(a)));

// var b = 654654;
// console.log(typeof(b + ""));
// console.log(typeof(String(b)));

// console.log(typeof(!! b));
// console.log(typeof(Boolean(b)));

// console.log("salopc" / 54);

// var m = null;
// console.log(m);


// function oqilganKitoblarSoni(){
//     let a = null;
//     while(a <= 1){
//         soni = +prompt("siz nechta kitob o'qigansiz");
//         if (soni == null || soni == "" || isNaN(soni)){
//             a = null;
//         }
//         else{
//             a = 2;
//         }
//         return soni;
//     }
// }
// const kitobxon = {
//     soni : oqilganKitoblarSoni(),
//     nomi : {},
//     muallif : {},
//     janr : [],
//     yoqdi : false
// };

// function kitobBaxo (massiv, k, nomi){
//     for (let i = 0; i < k; i++){
//         const a = prompt(`qaysi ${nomi} o'qigansiz`),
//               b = prompt("kitobga necha ball berasiz");
   
//         if (a != null && b != null &&  a != "" && b != "" && a.length < 70){
//             massiv[a] = b;
//             console.log("bajarildi");
//         }
//         else {
//             console.error("xato");
//             i--;  
//         }
//     }
// }
// kitobBaxo(kitobxon.muallif, 2, "muallif kitobini");
// kitobBaxo(kitobxon.nomi, 2, "kitobni");
// console.log(kitobxon);


// var a = [], i = 0, b = 2, n = 10, d = 2;
// for(i; i < n; i++){
//     b = b * d;
//     a [i] = b; 
// }
// console.log(a);

// var a = [], i = 2, n = 10;
// for(i; i <= n; i++){
//     a[0] = 1, a[1] = 1
//     a[i] = a[i-1] + a[i-2];
// }
// console.log(a);
// var a = [45, 47, 35, 78];
// let b = [], l = 1;
// for(i = a.length - 1; i >= 0; i--){
//     b[l-1] = a[i]
//     l++;
// }
// console.log(a);
// console.log(b);

// var a = [4, 5, 7, 9, 10, 33, 8, 11]
// let i = 0, b = [], l = 0;
// for(i; i < a.length; i++){
//     m = a[i] % 2
//     if(m != 0){
//         b[l] = a[i];
//         l++;
//     }
//     else{}
// }
// console.log(a);
// console.log(b);
// console.log(l + " ta toq son bor");


// var a = [4, 5, 7, 9, 10, 33, 8, 11]
// let i = 0, b = [], l = 0;
// for(i; i < a.length; i++){
//     m = a[i] % 2
//     if(m == 0){
//         b[l] = a[i];
//         l++;
//     }
//     else{}
// }
// console.log(a);
// console.log(b);
// console.log(l + " ta juft son bor");


//// chala chiqdi
// var a = [45, 54, 5, 21, 22, 37, 84, 66, 26]; 
// let b = [], k = [], m = 0, i = 0, l = 0;
// for(i; i < a.length; i++){
//     if(a[i] % 2 == 0){
//         b[l] = a[i]
//         l++;
//     }
//     else{
//         k[m] = a[i];
//         m++;
//     }
// }
// console.log(a);
// console.log(b);
// console.log(k);
 

// var a = [15, 44, 8, 9, 78, 7, 12, 45, 32, 10, 17, 85], i = 0, l = 0, m = [];
// for(i; i < a.length; i++){
//     i++;
//     m[l] = a[i];
//     l++;
// }
// console.log(a);
// console.log(m);
// var k = 0, p = 0, q = [];
// for(k; k < a.length; k++){
//     q[p] = a[k];
//     k++;
//     p++;
// }
// console.log(q);

// console.log("[" + m + " : " + q + "]");



// var a = [15, 44, 8, 9, 78, 7, 12, 45, 32, 10, 17, 85], i = 0, l = 0, m = [];
// for(i = a.length; i > 0; i--){
//     i--;
//     m[l] = a[i];
//     l++;
// }
// var k = 0, p = 0, q = [];
// for(k; k < a.length; k++){
//     q[p] = a[k];
//     k++;
//     p++;
// }
// console.log(a);
// console.log(q);
// console.log(m);
// console.log("[" + q + ," : " + m + "]");


// let p = document.querySelector("p");
// console.log(p);
// p.innerHTML = "salom dunyo";
// document.querySelector("p").innerHTML = "hello world";
// let p = document.getElementById("text");
// console.log(p);
// p.innerHTML = "hello world";

// let p = document.querySelector(".matn");
// console.log(p);
// p.innerHTML = "salom";
// let style = {
//     textHajmi: "50px",
//     rangi:"yellow",

// }
// p.style.color = style.rangi;
// p.style.fontSize = style.textHajmi;
// p.style.textTransform = "uppercase";


// let box = document.getElementById("quti");
// let box = document.getElementsByClassName("shakl");
// let box = document.getElementsByTagName("div");
// let box = document.querySelectorAll(".shakl");
// let box = document.querySelector(".shakl");
// let box = document.querySelector("#quti");
// console.log(box);





























ste