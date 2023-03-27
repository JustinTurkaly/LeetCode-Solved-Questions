/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
Input - array of ints and an integer
Output - the indices of the two ints that add up to target
Constr/Edge - guaranteed 2 ints in array,only one valid answer exists
Plan - 
- loop thru nums array
  - check if the difference to target is inside indexObj
  - if it is return [indexObj[difference], i]
  - else add number to obj as a key and the index as the value
*/
var twoSum = function(nums, target) {
  const indexObj = {};
  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if (indexObj[difference] !== undefined) {
      return [indexObj[difference], i];
    } else {
      indexObj[nums[i]] = i;
    }
  } 
};