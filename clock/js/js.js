function yangiVaqt() {
  let date = new Date();
  let soat = date.getHours(),
    yil = date.getFullYear(),
    oy = date.getMonth(),
    kun = date.getDate(),
    hafta_kuni = date.getDay(),
    daqiqa = date.getMinutes(),
    soniya = date.getSeconds(),
    kun_tun = "PM";

  if (soat > 12) {
    soat = soat - 12; 
    kun_tun = "PM";
  }
  else{
    kun_tun = "AM";
  }
  let oylar = [
      "yanvar",
      "fevral",
      "mart",
      "april",
      "may",
      "iyun",
      "iyul",
      "avgust",
      "sentabr",
      "oktabr",
      "noyabr",
      "dekabr",
    ],
    hafta_kunlari = [
      "yakshanba",
      "dushanba",
      "seshanba",
      "chorshanba",
      "payshanba",
      "juma",
      "shanba",
    ],
    idlar = [
      "hafta_kuni",
      "oy",
      "kun",
      "yil",
      "soat",
      "daqiqa",
      "soniya",
      "kun_tun",
    ],
    qiymatlar = [
      hafta_kunlari[hafta_kuni],
      oylar[oy],
      kun,
      yil,
      soat,
      daqiqa,
      soniya,
      kun_tun,
    ];
  for (let i = 0; i < idlar.length; i++) {
    document.querySelector(`#${idlar[i]}`).innerHTML = ` ${
      qiymatlar[i] < 10 ? "0" + qiymatlar[i] : qiymatlar[i]
    } `;
  }
}

function hozrgiVaqt() {
  yangiVaqt();
  window.setInterval("hozrgiVaqt()", 1000);
}