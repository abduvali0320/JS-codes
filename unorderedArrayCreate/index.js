// console.time();
// let randomall = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10];
// const randomFun = (array) => {
//   let res = [];
//   let set = new Set();
//   let ran = 0;
//   while (true) {
//     ran = parseInt(Math.random() * array.length);
//     if (array.length === res.length) {
//       break;
//     } else {
//       if (!set.has(ran)) {
//         set.add(ran);
//         res.push(array[ran]);
//       }
//     }
//   }
//   return res;
// };
// console.log(randomFun(randomall));
// console.timeEnd();
console.time();
function randomArray() {
  let randomall = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10];
  let len = randomall.length;
  let x;
  for (x = len - 1; x > 0; x--) {
    var y = Math.floor(Math.random() * x);
    var temp = randomall[x];
    randomall[x] = randomall[y];
    randomall[y] = temp;
  }
  // let i = randomall.length;
  // console.log(i);
  // while (--i > 0) {
  //   let p = Math.ceil(Math.random() * randomall.length - 1);
  //   // [randomall[i], randomall[p]] = [randomall[p], randomall[i]];
  //   let t = randomall[i];
  //   randomall[i] = randomall[p];
  //   randomall[p] = t;
  // }
  return randomall;
}
console.log(randomArray());
console.timeEnd();
// function fisher_yates() {
//   let array = [40, 90, 50, 70, 80, 30, 60, 10, 20];
//   let i = array.length;
//   while (--i > 0) {
//     let temp = Math.floor(Math.random() * (i + 1));
//     [array[temp], array[i]] = [array[i], array[temp]];
//   }
//   return array;
// }

// console.log(fisher_yates());

// let randomall = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10];
// [randomall[0], randomall[2]] = [randomall[2], randomall[0]];

// let p = randomall[0];
// randomall[0] = randomall[2];
// randomall[2] = p;
// console.log(randomall);
