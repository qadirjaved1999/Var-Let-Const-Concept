console.log("Hy Buddy How are you!");

// var variable => this is Global variable (Function Scoped or Global Scoped)
var fullName = "Qadir Javed";
console.log("Value of var variable = ", fullName);
{
  // let variable (Blocked Scoped)
  let a = 5;
  console.log("Value of let variable = ", a);

  //  we can not use same name of variable in same block
  let q = 100;
  console.log("Value of let variable = ", q);

  // const variable(Blocked Scoped)
  const b = 10;
  console.log("Value of const variable = ", b);

  //  we can not use same name of variable in same block
  const val = 50;
  console.log("Value of const variable = ", val);

  console.log("Value of var  variable inside the block = ", fullName);
}
//  we can not access let and const out side the block because this blocked scoped
// console.log("Value of const variable = ", b); error

{
  const val = 50;
  //   val = 500; => error you can not reassign the value of const variable
  console.log("Value of const variable = ", val);

  let a = 5;
  a = 1000; //you can re-assign the value of the let variable
  console.log("Value of let variable = ", a);
}
