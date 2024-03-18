let btn_dark = document.querySelector("button");
const handleDark = () => {
  let html_tag = document.querySelector("html");
  if (html_tag.hasAttribute("data-style")) {
    html_tag.removeAttribute("data-style");
    return;
  }
  return html_tag.setAttribute("data-style", "dark");
};
btn_dark.addEventListener("click", handleDark);

let k = Symbol("unique text");
let p = { [k]: "lorem" };

console.log(p);

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
// 012
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
// 012
