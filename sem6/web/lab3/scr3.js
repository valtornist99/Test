"use strict";

const object1 = {
	name: 'Boris',
	weight: 15
};

const object2 = {
	name: 'Boris',
	weight: 15
};

const object3 = {
	name: 'Rex',
	weight: 20,
};

function isEquivalent(obj1, obj2) {
  for (let key in obj1) {
    if(!(obj1[key] === obj2[key])) {
      return false;
    }
  }
  return true;
}

console.log(isEquivalent(object1, object2)); // true
console.log(isEquivalent(object1, object3)); // false
