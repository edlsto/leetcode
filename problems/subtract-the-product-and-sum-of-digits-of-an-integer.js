const subtractProductAndSum = (n) => {
  const stringArray = n.toString().split("");
  const numbersArray = stringArray.map((el) => parseInt(el));
  const sum = numbersArray.reduce((el, acc) => {
    acc += el;
    return acc;
  }, 0);
  const product = numbersArray.reduce((el, acc) => {
    acc *= el;
    return acc;
  });
  return product - sum;
};
