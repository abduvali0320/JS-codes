let tbody = document.querySelector("tbody"),
  data = {},
  qoshish = document.querySelector("#add"),
  modal = document.querySelector(".modal"),
  form = document.querySelector(".modal form"),
  input = document.querySelectorAll("input"),
  qiymat = null;

let dataST = JSON.parse(localStorage.getItem("data")) || [];
function malumotLocal() {
  tbody.innerHTML = "";
  dataST = JSON.parse(localStorage.getItem("data")) || [];

  if (dataST.length > 0) {
    dataST.forEach((element, i) => {
      tbody.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${element.ism || ""}</td>
        <td>${element.familya}</td>
        <td>${element.email}</td>
        <td><button onclick=(deleteFunc(${i})) >delete</button></td>
        <td><button onclick=(editFunc(${i})) >edit</button></td>
      </tr>
      `;
    });
  } else {
    tbody.innerHTML = `<tr> <td colspan="6">  malumot topilmadi </td></tr> `;
  }
}
malumotLocal();

// modal oyna uchun
function show() {
  modal.style.top = 0;
  form.style.top = 0;
}
// modal oyna yopish uchun
function closess() {
  modal.style.top = "-100%";
  form.style.top = "-100%";
}
form.addEventListener("click", (e) => {
  e.stopPropagation();
});
modal.addEventListener("click", () => {
  closess();
});
qoshish.addEventListener("click", () => {
  show();
});

input.forEach((item) => {
  item.addEventListener("keyup", (e) => {
    data = {
      ...data,
      [e.target.name]: e.target.value,
    };
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (qiymat == null) {
    if (localStorage.getItem("data")) {
      localStorage.setItem(
        "data",
        JSON.stringify([...JSON.parse(localStorage.getItem("data")), data])
      );
    } else {
      localStorage.setItem("data", JSON.stringify([data]));
    }
    data = {};
    e.target.reset();
    malumotLocal();
  } else {
    if (localStorage.getItem("data")) {
      localStorage.setItem(
        "data",
        JSON.stringify([
          ...dataST.slice(0, qiymat),
          data,
          ...dataST.slice(qiymat + 1, dataST.length),
        ])
      );
    }
    e.target.reset();
    malumotLocal();
    qiymat = null;
  }
  closess();
});

function editFunc(i) {
  qiymat = i;
  show();
  input.forEach((item) => {
    item.value = dataST[i][item.name];
  });
}

function deleteFunc(i) {
  console.log(dataST.slice(i, i + 1));
  localStorage.setItem(
    "data",
    JSON.stringify([
      ...dataST.slice(0, i),
      ...dataST.slice(i + 1, dataST.length),
    ])
  );
  malumotLocal();
}
