const runningSum = (nums) => {
  return nums.map((num, i) => {
    return nums.slice(0, i + 1).reduce((acc, el) => {
      acc += el;
      return acc;
    });
  });
};
