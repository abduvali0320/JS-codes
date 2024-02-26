// setTimeout(function(){
//     console.log('salom');
// },1000)

// const boxer = document.querySelector('.boxer');

// let tepa = 0,
//     chap = 0,
//     past = 350,
//     ong = 0;
// harakat = setInterval(() =>{
//     boxer.style.top = tepa + 'px';
//     boxer.style.transform = "rotate(90deg)";
//     tepa = tepa + 10;
//     if(tepa == 400){
//         tepa = tepa - 10;
//         boxer.style.left = chap + 'px';
//         chap = chap + 10;
//         boxer.style.transform = "rotate(0deg)";

//     }
//     if(chap == 400){
//         chap = chap - 10;
//         boxer.style.transform = "rotate(-90deg)";
//     }

// }, 200)

// tugma.addEventListener('click', () => {
//     let yur = 0;
//     vaqt = setInterval(() => {
//         boxer.style.top = yur + "px";
//         boxer.style.left = yur + "px";
//         yur = yur + 10

// const vaqt = new Date();

// console.log(vaqt.getFullYear() + "-yil");
// console.log(vaqt.getMonth() + "-oy");

// const boshladi = new Date('2001-03-20'),
//       tugadi = new Date(),
//       hozir = new Date();

// console.log("hozirgacha " + parseInt(hozir.getTime() / 1000 / 60 / 60 / 24) + " kun o'tdi");
// console.log("hozirgacha " + parseInt(hozir.getTime() / 1000 / 60 / 60 / 24 / 7) + " hafta o'tdi");
// console.log("hozirgacha " + parseInt(hozir.getTime() / 1000 / 60 / 60) + " soat o'tdi");
// console.log("hozirgacha " + parseInt(hozir.getTime() / 1000 / 60) + " minut o'tdi");
// console.log("hozirgacha " + parseInt(hozir.getTime() / 1000 / 60) + " minut o'tdi");
// console.log("hozirgacha " + parseInt(hozir.getTime() / 1000) + " millisekund o'tdi");

// console.log("men hozirgacha " + parseInt((tugadi - boshladi) / 1000 / 60 / 60 / 24) + " yashadim");

// const boshladi = new Date();

// for (i = 1; i <= 10000000; i++){
//     let son = i ** 3;
// }
// const tugadi = new Date();
// console.log("hisoblash " + parseInt(tugadi - boshladi) + " millisekund o'tdi");

function qolganSana(sana) {
  let a = Date.parse(sana) - Date.parse(new Date());
  kun = parseInt(a / (1000 * 60 * 60 * 24));
  soat = parseInt((a / (1000 * 60 * 60)) % 24);
  minut = parseInt((a / (1000 * 60)) % 60);
  sekund = parseInt(a / 1000) % 60;
  return {
    kun,
    soat,
    minut,
    sekund,
    umumiy: a,
  };
}
console.log(qolganSana("08-10-2029"));
function vaqtYoz(sana) {
  const vaqti = setInterval(qaytaYoz, 1000);
  let ozgaruvchi = document.querySelector("#hoshiya"),
    kun = ozgaruvchi.querySelector("#kun"),
    soat = ozgaruvchi.querySelector("#soat"),
    minut = ozgaruvchi.querySelector("#minut"),
    sekund = ozgaruvchi.querySelector("#sekund");
  function nol(qiymat) {
    if (qiymat < 10) {
      qiymat = `0${qiymat}`;
    }
    return qiymat;
  }
  function qaytaYoz() {
    let vaqti = qolganSana(sana);
    (kun.innerHTML = nol(vaqti.kun)),
      (soat.innerHTML = nol(vaqti.soat)),
      (minut.innerHTML = nol(vaqti.minut)),
      (sekund.innerHTML = nol(vaqti.sekund));
  }
  if (vaqti.umumiy <= 0) {
    clearInterval();
  }
  qaytaYoz();
}
vaqtYoz("08-10-2029");
