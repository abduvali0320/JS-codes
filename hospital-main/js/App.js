let url = "https://hospital.bookblogs.uz",
  userText = document.querySelector(".user"),
  token,
  header;
if (localStorage.getItem("api_token")) {
  token = localStorage.getItem("api_token");
  header = {
    headers: {
      'authorization': `Bearer ${token}`,
    },
  };
  axios
    .post(`${url}/auth/checkuser`, {}, header)
    .then((res) => {
      userText.innerHTML = res.data.name;
    })
    .catch(() => {
      window.location.href = "../login/login.html";
    });
} else {
  window.location.href = "../login/login.html";
}

const nol = (son) => {
  return `${son < 10 ? "0" + son : son}`;
};
const converTime = (date) => {
  let d = new Date(date);
  return `${nol(d.getHours())} : ${nol(d.getMinutes())}  ${nol(
    d.getDay()
  )}/${nol(d.getMonth())}/${nol(d.getFullYear())}`;
};

const navbarNav = document.querySelector(".navbar-nav"),
  navMenu = [
    {
      link: "./department.html",
      text: "Bo'limlar",
    },
    {
      link: "./spec.html",
      text: "Muttaxasislik",
    },
    {
      link: "./room.html",
      text: "Xonalar",
    },
    {
      link: "./position.html",
      text: "Position",
    },
    {
      link: "./doctor.html",
      text: "Shifokorlar",
    },
  ];
navbarNav.innerHTML = "";
navMenu.map((item) => {
  navbarNav.innerHTML += `
    <li class="nav-item">
      <a class="nav-link" href="${item.link}"> ${item.text} </a>
    </li>
  `;
});
