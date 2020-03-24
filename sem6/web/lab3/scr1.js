"use strict";

const ITMO_BORN_YEAR = 1990;
const ITMO_BORN_MONTH = 3;
const ITMO_BORN_DAY = 26;

let itmoBornDate = new Object();
itmoBornDate.toDateString = function(){
  const monthsEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dayEng = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  let date = new Date(ITMO_BORN_YEAR, ITMO_BORN_MONTH - 1, ITMO_BORN_DAY);
  let res = dayEng[date.getDay()] + " ";
  res += monthsEn[date.getMonth()] + " ";
  res += date.getDate() + " " + date.getFullYear();
  return res;
}

console.log(itmoBornDate.toDateString()); // Mon Mar 26 1990
