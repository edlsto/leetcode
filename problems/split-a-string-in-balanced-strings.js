const balancedStringSplit = (string) => {
  let counter = 0;
  let strings = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === "L") {
      counter++;
    } else {
      counter--;
    }
    if (counter === 0) {
      strings++;
    }
  }
  return strings;
};
