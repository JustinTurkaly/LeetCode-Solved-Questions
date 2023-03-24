/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
Input - sorted array of ints, and a target value
Output - the index of where the int is, or where it should be if non existent
Constr/Edge - at least 1 int in input array, can have negative values, no dup ints
Plan - 
- use binary search to find num
- set pivot to middle index
- if target is less or greater than pivot value splice array in the right direction
*/
var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    }
    return left;
}