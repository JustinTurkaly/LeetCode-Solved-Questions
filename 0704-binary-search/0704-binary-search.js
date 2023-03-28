/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
Input - a sorted int array, and a target int
Output -the index of the target int in the array
Constr/Edge - no empty inputs, no duplicate ints
Plan - 
- assign left, right and mid pointers
- while left < right
  - if mid value is equal return index
  - else if it is less than
    - move left pointer to index + 1
  - else move right pointer to index - 1
- return -1
*/
var search = function(nums, target) {
  if (nums.length === 1 && nums[0] === target) {
    return 0;
  }
  let left = 0;
  let right = nums.length - 1;
  
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    console.log(mid)
    if (nums[mid] === target){
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};