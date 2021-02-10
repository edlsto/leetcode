const countConsistentStrings = (allowed, words) => {
  const allowedList = allowed.split("");
  const passingWords = words.filter((word) => {
    return word.split("").every((letter) => {
      return allowedList.includes(letter);
    });
  });
  return passingWords.length;
};
