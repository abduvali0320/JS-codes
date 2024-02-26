const tab_Yozuv = document.querySelectorAll(".tab_Yozuv"),
  tabrasm = document.querySelectorAll(".tabrasm"),
  tab_Yozuvlar = document.querySelector(".tab_Yozuvlar");

// tab_Yozuv.forEach(qiymat => {
// qiymat.classList.add('active')
// });

function tabYop() {
  tabrasm.forEach((qiymat) => {
    qiymat.style.display = "none";
  });
  tab_Yozuv.forEach((qiymat) => {
    qiymat.classList.remove("active");
  });
}

function tabOch(i = 0) {
  tabrasm[i].style.display = "block";
  tab_Yozuv[i].classList.add("active");
}

tabYop();
tabOch();

tab_Yozuvlar.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target);
  if (e.target && e.target.classList.contains("tab_Yozuv")) {
    tab_Yozuv.forEach((qiymat, i) => {
      if (e.target == qiymat) {
        tabYop();
        tabOch(i);
      }
    });
  }
});
