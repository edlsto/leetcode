const numberOfSteps = (num) => {
  let count = 0;
  let current = num;
  while (current > 0) {
    console.log(current);
    count++;
    if (current % 2 === 1) {
      current = current - 1;
    } else {
      current = current / 2;
    }
  }
  return count;
};
