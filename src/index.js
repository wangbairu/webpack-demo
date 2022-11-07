import _ from "lodash";
/**
 * 1. 这使你可以在依赖于此样式的 js 文件中 import './style.css'。
 * 2. 现在，在此模块执行过程中，含有 CSS 字符串的 <style> 标签，将被插入到 html 文件的 <head> 中。
 */
import "./style.css";
function component() {
  const element = document.createElement("div");

  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  return element;
}

document.body.appendChild(component());
