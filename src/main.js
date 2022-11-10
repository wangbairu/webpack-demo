import {
  sum,
  mul,
  promise,
} from "./js/math";

import buyUI from "./js/buy_ui";

const {
  dateFormat,
  priceFromat,
} = require("./js/format");

buyUI.foo1();
buyUI.foo2();
buyUI.foo3();
console.log(sum(20, 30));
console.log(mul(20, 30));
promise().then((res) => {
  console.log("res:", res);
});
console.log(dateFormat("1213"));
console.log(priceFromat("1213"));
