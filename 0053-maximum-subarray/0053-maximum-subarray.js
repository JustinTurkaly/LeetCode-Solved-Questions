/**
 * @param {number[]} nums
 * @return {number}
 */

/*
Input - int array
Output - the subarray with largest sum
Plan - 
- assign max and sum to first int in nums
- loop thru nums array
  - reassign sum to the max of current num and sum plus current num
  - reassign max to the max of sum and old max
-return max
*/
var maxSubArray = function(nums) {
  let max = nums[0];
  let sum = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(nums[i], sum + nums[i]);
    max = Math.max(sum, max)
  }
  return max;
};