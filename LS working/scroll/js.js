// let randomMassiv = [
//   12, 15, 7, 28, 47, 20, 46, 14, 49, 10, 21, 32, 5, 0, 47, 11, 23, 24, 45, 10,
//   49, 12, 41, 19, 28, 34, 29, 41, 3, 1, 9,
// ];

// let m = {k:"df"};
// console.log(typeof randomMassiv[Symbol.apply]);

// const array1 = [5, 0, 107, 9];

// let index = -2;

// console.log(
//   `Using an index of ${index} the item returned is ${array1.at(index)}`
// );

// const arr1 = [0, 1, 2, [3, 4]];

// console.log(arr1.flat());
// // expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

// let text =
//   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, autem eius odio magnam totam quae, delectus, dignissimos maiores aliquam eaque fuga dolorem ea omnis sapiente recusandae beatae hic dolorum doloremque?";
// let textMassiv = text.split(" ");
// console.log(arr2.flat(5));

// let mm = [];
// textMassiv.forEach((item, index) => {
//   let m = item.charAt().toLocaleUpperCase() + item.slice(1) + " ss";
//   mm.push(m);
// });
// console.log(mm);

let arr = arr2.flat(5);
let m = Array.from(arr, (x) => x + x);

console.log(m);