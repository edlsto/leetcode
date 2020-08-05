const shuffle = (nums, n) => {
  let newArray = [];
  let firstHalf = nums.slice(0, n);
  let secondHalf = nums.slice(n);
  for (let i = 0; i < firstHalf.length; i++) {
    newArray.push(firstHalf[i]);
    newArray.push(secondHalf[i]);
  }
  return newArray;
};
