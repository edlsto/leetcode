const smallerNumbersThanCurrent = (nums) => {
  const results = [];
  nums.forEach((num) => {
    let counter = 0;
    nums.forEach((n) => {
      if (n < num) {
        counter++;
      }
    });
    results.push(counter);
  });
  return results;
};
