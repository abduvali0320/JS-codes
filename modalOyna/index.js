var modal = document.querySelector(".modal"),
  modalChiqar = document.querySelector("[data-qiymat = aloqa]"),
  chiqish = document.querySelector("[data-qiymat = chiqish]"),
  body = document.querySelector("body"),
  modalTana = document.querySelector(".modalTana");

chiqish.addEventListener("click", (e) => {
  body.style.overflow = "auto";
  modalTana.style.top = "-5000px";
  modal.style.top = "-5000px";
});
modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    body.style.overflow = "auto";
    modalTana.style.top = "-5000px";
    modal.style.top = "-5000px";
  }
});

modalChiqar.addEventListener("click", (e) => {
  body.style.overflow = "hidden";
  modalTana.style.top = "0px";
  modal.style.top = "0px";
});
