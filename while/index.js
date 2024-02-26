// var a = 10, b = 3, i = 0;
// while (a > b){
//     a = a - b;
//     i++;
// }
// console.log(i + " ta bo'lakka bo'lindi qoldiq " + a + " ga teng");

// var a = 10, i = 1, rost = false;
// while(i <= a){
//     if(i == a){
//         rost = true;
//     }
//     i = i * 3;
// }

// rost ? console.log("3 ning darajasi") : console.log("3 ning darajasi emas");

// var b = 0, a = 16, i = 1, rost = false;
// while(a >= i){
//     if(i == a){
//         rost = true;
//     }
//     i = i * 2;
//     b++;
// }
// rost ? console.log(b - 1): console.log(" 2 ning darajasi emas");

// var s = 500, p = 22, b = 0;
// if(0 < p && p <= 25){
//     n = s;
//     while((s * 2) > n){
//         n = (n * p /100) + n;
//         b++;
//         console.log(n);
//     }
//     console.log(b + " oydan keyin 2 barobarga yetadi");
// }
// else{
//     console.log("siz O'zbekiston hududida yo'q foizni kiritdingiz");
// }

// var a = 25, b = 3, c = 0;
// console.log("ifoda " + a + " / " + b + " ga teng");
// while(a >= b){
//     a = a - b;
//     c++;
// }
// console.log(c + " bo'lindi " + a + " qoldiq qoldi");



// var a = 16, s = 1, k = 0;
// while(a >= s){
    //     s = s * 2;
//     k++;
// }
// console.log(k - 1);

// const a = 28;
// var k = 0, s = 1;
// while(s < a){
    //     s = s * 3;
    //     k++;
    // }   
    // console.log(k);
    
    // let kitoblar = prompt("");
    // massiv = kitoblar.split(", ");
    // console.log(massiv);
    // console.log(massiv.sort());
    // console.log(massiv.join(", "));
    // console.log(kitoblar); 
    

    // console.log("17 - 19");

    // var a = 46, b = 5, k = a;
    // console.log("misol ko'rinishi " + a + " / " + b);
    // while(a >= b){
    //     a = a - b;
    // }
    // console.log((k - a) + " chiqadi " + a + " qoldiq qoladi");

    // let n = +prompt("kerakli sonni kiritng")
    // var  k, l = 0, b = 0, n = 1458;
    // console.log("sonning ko'rinishi " + n);
    // while(n > 0){
    //         k = n % 10;
    //         n = parseInt(n / 10);
    //         l = l * 10 + k 
    //         b++;
    //     }
    //     console.log(l);

    // let n = +prompt("kerakli sonni kiritng")
    // var i = 10, b = 0, m = 1, l;
    // console.log("sonning ko'rinishi " + n);
    // while(n > 1){
    //         m = n;
    //         m = m % i;
    //         n = n / i;
    //         b++;
    //         l = parseInt(m);
    //     }
    //     if (l == 2){
    //         console.log("bu sonning ichida 2 soni bor");
    //     }
    //     else{
    //         console.log("bunda 2 soni qo'q");
    //     }


    // let n = +prompt("kerakli sonni kiritng")
    // var i = 10, b = 0, m = 1, l, k;
    // console.log("sonning ko'rinishi " + n);
    // while(n > 1){
    //         m = n;
    //         m = m % i;
    //         n = n / i;
    //         b++;
    //         l = parseInt(m);
    //         k = l % 2;
    //     }
    //     if (k == 0){
    //         console.log("bu sonnin graqamlari orasida toq son yo'q ");
    //     }
    //     else{
    //         console.log("bu sonnin graqamlari orasida toq son bor");
    //     }
    // const n = 17;
    // var k = 2; i = 0;
    // while (k < n){
    //     k++;
    //     if (n % k == 0){
    //         i++;
    //     }
    // }
    // i == 0 ? console.log("son  tub"): console.log("tub emas");

    // const n1 = 24, n2 = 48;
    // n1 > n2 ? n = n1: n = n2;
    // let i = 0, k = 1;
    // while(n >= k){
    //     if(n1 % k == 0 && n2 % k == 0 ){
    //         i++ ; console.log(k);
    //     }
    //     k++;
    // }
// const n = 10;
// var k = n, s = 1;
// while(k > 0){
//     s = s * k;
//     k -=2;
//     console.log(s);
// }



// const kitoblar = {
//     nomi: "layli va majnun",
//     janr: "roman",
//     yozuvchi: "Alisher Navoiy",
//     yili: 1463,
//     hajmi: 10800,
//     vaqti: 3,
//     tasir : "ijobiy",
//     tarjima: 15,
//     varogi: 350,
//     birinchi_Tili:"turk",

// }
// const nusxa_kitob = Object.assign(kitoblar)
// nusxa_kitob = {};
// for(var item in kitoblar){
//     nusxa_kitob[item] = kitoblar[item];
// }
// nusxa_kitob.nomi = 'farxod sherin',
// nusxa_kitob.yili = 1456,
// nusxa_kitob.hajmi = 10650,
// console.log(kitoblar);
// console.log(nusxa_kitob);


// var massiv = ["kompuetr", "leptop", "mac", "Ipad"];
// var yangimassiv = ["london", "uzbekistan", "america", ]
// var aralash = [...massiv, ...yangimassiv];
// console.log(aralash);



// const kitoblar = {
//     nomi: "layli va majnun",
//     janr: "roman",
//     yozuvchi: "Alisher Navoiy",
//     yili: 1463,
//     hajmi: 10800,
//     vaqti: 3
// }
// yangi_kitob = {};
// yangi_kitob = {...kitoblar}
// console.log(yangi_kitob);



// var kitoblar_bir = ["behrobdan chayon", "layli majnun", "boy bolish "];
// var kitobalr_ikki =["hayot", "hayot mamot", "kambagal"];
// var kitoblar_uch = ["bizess", "texnik", "snouden", "stive jobs"];
// var aralash = [...kitoblar_bir, ...kitobalr_ikki, ...kitoblar_uch];
// console.log(aralash);


// var kompuetr_1 = {
//     xotira: 1000,
//     operativka: 4,
//     videokarta: true
// }

// var kompuetr_2 = {
//     xotira: 5000,
//     operativka:6,
// }
// Object.setPrototypeOf(kompuetr_2, kompuetr_1)
// console.log(kompuetr_2.videokarta);
