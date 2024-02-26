let tbody = document.querySelector("tbody"),
  data = [],
  info = document.querySelector(".info"),
  infoText = document.querySelector(".info .text"),
  inputValue = {},
  _id = null,
  position_list = document.querySelector("#position_list"),
  yashash_viloyat = document.querySelector("#yashash_viloyat"),
  yashash_shahri = document.querySelector("#yashash_shahri");

const modal = new bootstrap.Modal("#modal_doctor", {
  keyboard: false,
});
const handleSend = (e) => {
  e.preventDefault();
  let form = new FormData(e.target);
  form.forEach((element, name) => {
    console.log(element);
    inputValue[name] = element;
  });
  if (_id) {
  } else {
    axios.post(`${url}/doctor`, inputValue, {
      headers: {
        "Content-type": 'multipart/form-data',
        "authorization": `Bearer ${token}`,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }
};
const render = () => {
  tbody.innerHTML = "";
  if (data.length > 0) {
    data.map((item, index) => {
      tbody.innerHTML += `
        <tr>
          <th> ${index + 1} </th>
        </tr>
      `;
    });
  }
};

const get_api_data = () => {
  axios
    .get(`${url}/doctor`, header)
    .then((res) => {
      data = res.data;
      render();
    })
    .catch((err) => console.log(err))
    .finally(() => console.log("malumot olindi"));
};
get_api_data();
const handleDel = (_id) => {
  if (confirm("o'chirasimi ?")) {
    axios.delete(`${url}/doctor/${_id}`, header).then((res) => {
      data = data.filter((item) => item._id !== _id);
      render();
      info.classList.add("bg-success");
      info.classList.add("infoAcitve");
      infoText.innerHTML = "malumot o`chirldi";
      setTimeout(() => {
        info.className = "info";
      }, 1500);
    });
  }
};
const handleEdit = (id) => {
  _id = id;
  let inputs = document.querySelectorAll("form [name]");
  axios.get(`${url}/doctor/${id}`, header).then((res) => {
    inputs.forEach((input) => {
      input.value = res.data[input.name];
    });
    modal.show();
  });
};
const handleStatus = (_id) => {
  axios
    .get(`${url}/doctor/change/${_id}`, header)
    .then((res) => {
      data = data.map((c) => (c._id === res.data._id ? res.data : c));
      render();
    })
    .catch((err) => console.log(err));
};

tugilan_joy.innerHTML = `
    <option hidden value=""> Viloyatlarni tanlang </option>
  `;
yashash_viloyat.innerHTML = `
    <option hidden value=""> Viloyatlarni tanlang </option>
  `;
regions.map((region) => {
  let opt = `<option value="${region.id}"> ${region.name} </option>`;
  tugilan_joy.innerHTML += opt;
  yashash_viloyat.innerHTML += opt;
});

position_list.innerHTML = `
    <option hidden value=""> Muttaxasislikni tanlang </option>
  `;
axios.get(`${url}/spec`, header).then((res) => {
  res.data.map((c) => {
    position_list.innerHTML += `
      <option  value="${c._id}"> ${c.title} </option>
    `;
  });
});

yashash_viloyat.addEventListener("change", (e) => {
  yashash_shahri.innerHTML = `
    <option hidden value=""> Tumanlarni tanlang </option>
  `;
  districts.map((item) => {
    if (item.region_id === +e.target.value) {
      yashash_shahri.innerHTML += `
        <option  value="${item.id}"> ${item.name} </option>
      `;
    }
  });
});
