export const sum = (num1, num2) => {
  return num1 + num2;
};

export const mul = (num1, num2) => {
  return num1 * num2;
};

export const promise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("successfull!");
    }, 1000);
  });
};
