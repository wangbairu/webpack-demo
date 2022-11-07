
/**
 * 未使用webpack
 * 缺点:
 * 1. 无法直接体现脚本的执行依赖于外部库.
 * 2. 如果依赖不存在,或者引入顺序错误,应用程序将无法正常运行.
 * 3. 如果依赖被引入,但是并没有使用,浏览器将被迫下载无用的代码.
 */
function component() {
  const element = document.createElement('div');

  // lodash (目前通过一个 script 引入)对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component())