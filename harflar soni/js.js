let text = "salom";
function letterCount(matn) {
  const data = new Set(matn?.split(""));
  console.log(`so'zning asl nusxasi => ${matn}; qisqartma ${[...data]}`);
  let m = "";
  [...data].map((item) => {
    if (item.trim().length > 0) {
      m +=
        " " +
        item +
        " => " +
        matn.split("").filter((val) => val === item).length +
        "";
    }
  });
  return m === "" ? "matn kiritilmagan" : m;
}
console.log(letterCount('salom karim'));
