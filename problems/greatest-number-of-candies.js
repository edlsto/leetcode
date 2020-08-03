const kidsWithCandies = (candies, extraCandies) => {
  let mostCandies = candies.slice().sort((a, b) => b - a)[0];
  return candies.map((candy) => {
    let maxCandies = candy + extraCandies;
    if (maxCandies >= mostCandies) {
      return true;
    } else {
      return false;
    }
  });
};
