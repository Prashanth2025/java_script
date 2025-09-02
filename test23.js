// function f1() {
//   for (let i = 1; i <= 5; i++) {
//     if (i % 2 == 0) {
//     //   break;
//     // continue;
//     return;
//     }
//     console.log(i);
//     console.log("inside for loop")
//   }
//   console.log("outside for loop")
// }
// console.log("outside function")
// f1();

function rev (r1){
  let n =r1
    let r=[]
   let count =0
    for (let i = n.length-1;i>=0;i--){
        count++
        r.push(n[i])
    }


    return {r,count};
}


let r22=[1,2,3,4];
let r1 =rev(r22)
console.log(r1.r)
console.log(r1.count)
let r2 = [...r1.r]
r2 = r2.filter(n=>n%2==0)
console.log(r2)
