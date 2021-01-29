const createTargetArray = (nums, index) => {
  const targetArray = [];
  for (let i = 0; i < nums.length; i++) {
    targetArray.splice(index[i], 0, nums[i]);
  }
  return targetArray;
};
