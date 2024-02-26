let k = +prompt("son kirit");
function tubSon(son) {
  son = Math.abs(son);
  let qiymat = true;
  if (son > 2) {
    for (let i = 2; i <= Math.ceil(son ** (1 / 2)); i++) {
      if (son % i === 0) {
        qiymat = false;
        break;
      }
    }
  } else {
    qiymat = false;
  }
  return qiymat;
}
alert(tubSon(k));
