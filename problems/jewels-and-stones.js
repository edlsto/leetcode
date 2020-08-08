const numJewelsInStones = (J, S) => {
  const jewels = S.split("");
  let totalCount = 0;
  jewels.forEach((jewel) => {
    const string = new RegExp(jewel, "g");
    const jewelCount = (J.match(string) || []).length;
    totalCount += jewelCount;
  });
  return totalCount;
};
