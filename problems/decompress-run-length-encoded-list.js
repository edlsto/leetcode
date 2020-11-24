/* 
Input: nums = [1,1,2,3]
Output: [1,3,3]
*/

// iterate array
// create a new array
// if even index,
// loop the number of times represented by the even-numbered index element
// for each iteration, add the odd-numbered index element to the large new array

const decompressRLElist = (nums) => {
  let newArray = [];
  nums.forEach((num, i) => {
    if (i % 2 === 0) {
      for (let j = 0; j < nums[i]; j++) {
        newArray.push(nums[i + 1]);
      }
    }
  });
  return newArray;
};

console.log(decompressRLElist([1, 1, 2, 3]));
