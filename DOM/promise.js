// // const { promise } = require("zod");

// // let promise=new promise

// let a1 = ["apple", "orange", "grapes"];

// let [a, b, c] = a1;
// for (let items of a1) console.log(items);

let p1 = new Promise(function () {
  let getData = true;

  if (getData) Resolved(["orange", "apple"]);
  else Reject("error");
});

p1.then(function (data) {
  console.log(data);
  for (let item of data) console.log(item);
});
