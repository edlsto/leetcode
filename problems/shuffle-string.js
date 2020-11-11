const restoreString = (s, indices) => {
  let newWordArray = [];
  indices.forEach((el, index) => {
    newWordArray[el] = s.charAt(index);
  });
  return newWordArray.join("");
};
