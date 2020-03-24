"use strict";

function sum(){
  let res = 0;
  for(let i of this){
    res += i;
  }
  return res;
}

console.log(sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));
