/**
 * @param {number[]} nums
 * @return {number}
 */

/*
Input - an array of ints
output - the majority element (the element that appears more than n/2)
Constr/Edge - no empty inputs
Plan - 
- loop thru nums array
  - building a freqObj
  - if value > nums.length / 2
    - return the key for that value
*/
var majorityElement = function(nums) {
  const freqObj = {};
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    if (freqObj[cur] === undefined) {
      freqObj[cur] = 1;
    } else {
      freqObj[cur] += 1;
    } 
    if (freqObj[cur] > nums.length / 2) {
      return cur;
    }
  }  
};