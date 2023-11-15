const str = "hello world";

const str1 = str.split(" ");
const str3 = str1.reverse();
console.log(str3.join(" "));

function sumOfDigits(n) {
  const numStr = n.toString();
  console.log(numStr);

  const sum = Array.from(numStr).reduce(
    (acc, digit) => acc + parseInt(digit),
    0
  );

  return sum;
}

const number = 123;
console.log(sumOfDigits(number));

const url = "https://jsonplaceholder.typicode.com/users";

async function GetUser(url, CallbackFunction) {
  const data = await fetch(url);
  const res = await data.json();
  CallbackFunction(res);
}
function CallbackFunction(res) {
  console.log(res);
  const name = res.map((data) => data.name);
  console.log(name);
  const names = res.map((data) => data.company.name);
  console.log(names);
}

console.log(GetUser(url, CallbackFunction));

// Vidhya S1:32 PM
// javascript datatypes
// promise in JS
// trivisl
// trivial
// Vidhya S1:35 PM
// anchor tag in html
// !important
// Vidhya S1:39 PM
// How to create components in React?
// Given a string S consisting of 2 words reverse the order of two words .
// hello world
// Vidhya S1:44 PM
// 2 mins
// Vidhya S1:46 PM
// Given a number n Find the sum of the digits of number n
// 123
// Vidhya S1:52 PM
// vidhya@guvi.in
// Vidhya S1:57 PM
// https://docs.google.com/document/d/1-CxSsv-XzYExNHwYBU7FlKklw6_FEMCUPV7XqoaXRos/edit
// Vidhya S2:00 PM
// https://jsonplaceholder.typicode.com/users
// FSD Mock <> Vidhya S <> Jaya J
