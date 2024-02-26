let one = document.querySelector("#one"),
  two = document.querySelector("#two"),
  javob = document.querySelector("#javob"),
  natija = document.querySelector("#natija"),
  amal = document.querySelector("#amal"),
  achkoElem = document.querySelector(".achko"),
  daqiqa = document.querySelector("#daqiqa"),
  soniya = document.querySelector("#soniya"),
  boshla = document.querySelector("#boshla"),
  jarimaElem = document.querySelector(".jarimaElem");
qiymat = true;

let amalMassiv = ["*", "/", "-", "+"],
  a = 0,
  b = 0,
  c = 0;
let j = 0,
  achko = 0,
  jarima = 0;
amal.innerHTML = "~";
function innerFunc() {
  a = Math.ceil(Math.random() * 20);
  b = Math.ceil(Math.random() * 20);
  c = Math.ceil(Math.random() * amalMassiv.length - 1);
  one.innerHTML = a;
  two.innerHTML = b;
  amal.innerHTML = amalMassiv[c];
  achkoElem.innerHTML = achko;
  jarimaElem.innerHTML = jarima;
}

javob.disabled = true;

boshla.addEventListener("click", () => {
  javob.focus();
  innerFunc();
  javob.disabled = false;
  javob.focus();
  if (qiymat) {
    let daq = 0,
      son = 0;
    (achko = 0), (jarima = 0);
    achkoElem.innerHTML = achko;
    jarimaElem.innerHTML = jarima;
    soniya.innerHTML = son < 10 ? `0${son}` : son;
    daqiqa.innerHTML = daq < 10 ? `0${daq}` : daq;
    let vaqt = setInterval(() => {
      son += 1;
      soniya.innerHTML = son < 10 ? `0${son}` : son;
      if (son >= 59) {
        daq += 1;
        son = 0;
        daqiqa.innerHTML = daq < 10 ? `0${daq}` : daq;
      }
      if (daq === 3) {
        daq = 0;
        son = 0;
        qiymat = true;
        clearInterval(vaqt);
        boshla.innerHTML = "boshla";
        javob.disabled = true;
      }
    }, 1000);
    qiymat = false;
    boshla.innerHTML = "keyingisi";
  } else {
    jarima += 1;
    innerFunc();
  }
});

function switchFunc() {
  switch (amalMassiv[c]) {
    case "+":
      j = a + b;
      break;
    case "-":
      j = a - b;
      break;
    case "*":
      j = a * b;
      break;
    case "/": {
      j = a / b;
      break;
    }
  }
}
switchFunc();
javob.addEventListener("input", (e) => {
  let value = e.target.value;
  switchFunc();
  if (j == parseFloat(value)) {
    achko++;
    innerFunc();
    javob.value = "";
    natija.innerHTML = "";
  } else if (j.toString().length <= value.length) {
    natija.innerHTML = "noto'gri";
  }
});
