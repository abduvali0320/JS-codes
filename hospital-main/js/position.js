let tbody = document.querySelector('tbody'),
  data = [],
  info = document.querySelector('.info'),
  infoText = document.querySelector('.info .text'),
  inputValue = {},
  _id = null
const modal = new bootstrap.Modal('#modal_spec', {
  keyboard: false
})
const handleSend = (e) => {
  e.preventDefault();
  let form = new FormData(e.target)
  form.forEach((element, name) => {
    inputValue[name] = element
  });
  if (_id) {
    axios.put(`${url}/position`, { ...inputValue, _id }, header)
      .then((res) => {
        data = data.map((c) => c._id === res.data._id ? res.data : c)
        render()
        e.target.reset()
        _id = null
      })
      .catch((err) => console.log(err))
      .finally(() => console.log('jo`natildi'))
  } else {
    axios.post(`${url}/position`, inputValue, header)
      .then((res) => {
        data = [res.data, ...data,]
        render()
        e.target.reset()
      })
      .catch((err) => console.log(err))
      .finally(() => console.log('jo`natildi'))
  }
}

const render = () => {
  tbody.innerHTML = ''
  if (data.length > 0) {
    data.map((item, index) => {
      tbody.innerHTML += `
        <tr>
          <th> ${index + 1} </th>
          <td>${item.title}</td>
          <td> <button onclick='handleStatus(${JSON.stringify(item._id)})' class='${item.status === 1 ? 'btn btn-success' : 'btn btn-warning'}'>
          ${item.status === 1 ? `<i class="bi bi-check-lg"></i>` : ` <i class="bi bi-x"></i> `} </button></td>
          <td> ${converTime(item.createdTime)} </td>
          <td>
            <button class='btn btn-warning'  onclick='handleEdit(${JSON.stringify(item._id)})'> <i class="bi bi-pencil-square"></i> </button>
            <button class='btn btn-danger' onclick='handleDel(${JSON.stringify(item._id)})' > <i class="bi bi-trash"></i> </button>
          </td>
        </tr>
      `
    })
  }
  else {
    tbody.innerHTML = `
      <tr>
        <th colspan='100' class='text-center' >
            No Data...
        </th>    
      </tr>
    `
  }
}

const get_api_data = () => {
  axios.get(`${url}/position`, header)
    .then((res) => {
      data = res.data
      render()
    })
    .catch((err) => console.log(err))
    .finally(() => console.log('get method position'))
}
get_api_data()
const handleDel = (_id) => {
  if (confirm("o'chirasimi ?")) {
    axios.delete(`${url}/position/${_id}`, header)
      .then((res) => {
        data = data.filter((item) => item._id !== _id)
        render()
        info.classList.add('bg-success')
        info.classList.add('infoAcitve')
        infoText.innerHTML = 'malumot o`chirldi'
        setTimeout(() => {
          info.className = 'info'
        }, 1500)
      })
  }
}
const handleEdit = (id) => {
  _id = id
  let inputs = document.querySelectorAll('form [name]')
  axios.get(`${url}/position/${id}`, header)
    .then(res => {
      inputs.forEach(input => {
        input.value = res.data[input.name]
      })
      modal.show()
    })
}
const handleStatus = (_id) => {
  axios.get(`${url}/position/change/${_id}`, header)
    .then((res) => {
      data = data.map((c) => c._id === res.data._id ? res.data : c)
      render()
    })
    .catch((err) => console.log(err))
}