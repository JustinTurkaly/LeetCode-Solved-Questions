/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
Input - an int array
Output - a tuple where tuple[0] = number of pairs formed, tuple[1] = the remainder left in array
Constr/Edge - No null inputs
Plan - 
- loop thru nums
  - make a freq obj
- loop thru freq obj
 - if value is even count the pairs
 - if odd then increment remainder and subtract remainder from value then divide by two to count pairs
- assign pair count and remainder count into a tuple like [pairCount, remCount]
*/
var numberOfPairs = function(nums) {
  const freqObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!freqObj[nums[i]]) {
        freqObj[nums[i]] = 1;
    } else {
        freqObj[nums[i]]++;
    }
  }
  
  let pairsCount = 0;
  let remCount = 0;
  for (const key in freqObj) {
      let currentVal = freqObj[key];
      if (currentVal % 2 === 0) {
        pairsCount += currentVal / 2;
      } else {
        remCount++;
        let temp = currentVal - 1;
        pairsCount += temp / 2;
      }
  }
  let result = [pairsCount, remCount];
  return result;
};