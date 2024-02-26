let minut = document.querySelector(".minut"),
  secund = document.querySelector(".secund"),
  start = document.querySelector(".start"),
  reset = document.querySelector(".reset"),
  toxta = document.querySelector(".stop"),
  text = document.querySelector(".text");
function innerStart(son = 1500) {
  umumiy = son;
  daqiqa = parseInt(umumiy / 60);
  soniya = umumiy % 60;
  innerTime();
}
innerStart(1500);
let btnsClassRemove = () => {
  toxta.classList.remove("dNone");
  reset.classList.remove("dNone");
  start.classList.add("dNone");
};
let btnsClassAdd = () => {
  toxta.classList.add("dNone");
  reset.classList.add("dNone");
  start.classList.remove("dNone");
};
btnsClassAdd();
function innerTime() {
  minut.innerHTML = daqiqa < 10 ? "0" + daqiqa : daqiqa;
  secund.innerHTML = soniya < 10 ? "0" + soniya : soniya;
}
innerTime();
let startInterVal;
start.addEventListener("click", () => {
  btnsClassRemove();
  umumiy--;
  daqiqa = parseInt(umumiy / 60);
  soniya = umumiy % 60;
  innerTime();
  startInterVal = setInterval(() => {
    umumiy--;
    daqiqa = parseInt(umumiy / 60);
    soniya = umumiy % 60;
    if (umumiy <= 0) {
      umumiy = 0;
      clearInterval(startInterVal);
      toxta.classList.add("dNone");
      text.innerHTML = "Vaqt tugadi, Iltimos qaytadan boshlang";
    }
    innerTime();
  }, 1000);
});
toxta.addEventListener("click", () => {
  clearInterval(startInterVal);
  toxta.classList.add("dNone");
  start.classList.remove("dNone");
});
reset.addEventListener("click", () => {
  btnsClassAdd();
  clearInterval(startInterVal);
  innerStart();
  text.innerHTML = "";
});
