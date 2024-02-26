let info = document.querySelector(".info");
let infoText = document.querySelector(".info .text");
let auth = (e, type = "null") => {
  e.preventDefault();
  let user = {};
  let formElem = new FormData(e.target);
  formElem.forEach((value, name) => {
    user[name] = value;
  });
  if (type === "login") {
    axios
      .post("https://hospital.bookblogs.uz/auth/login", user)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem("api_token", res.data.token);
          localStorage.setItem("api_user", JSON.stringify(res.data.user));
          window.location.href = "../index.html";
        }
      })
      .catch((err) => {
        console.log(err);
        info.classList.add("bg-danger");
        info.classList.add("infoAcitve");
        infoText.innerHTML = err.response.data;
        setTimeout(() => {
          info.className = "info";
        }, 1500);
      });
    // .finally(console.log('jo`natildi'))
  } else {
    axios
      .post("https://hospital.bookblogs.uz/auth/reg", user)
      .then((res) => {
        console.log(res);
        switch (res.data) {
          case "required":
            info.classList.add("bg-danger");
            infoText.innerHTML = "maydonlar to`ldirilmagan";
            break;
          case "success":
            info.classList.add("bg-success");
            break;
          case "exist":
            info.classList.add("bg-primary");
            infoText.innerHTML = "bunday foydalanuvchi mavjud";
            break;
          default:
            break;
        }
        info.classList.add("infoAcitve");
        if (res.data === "success") {
          window.location.href = "../login/login.html";
        }
        setTimeout(() => {
          info.className = "info";
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
    // .finally(console.log('jo`natildi'))
  }
};
