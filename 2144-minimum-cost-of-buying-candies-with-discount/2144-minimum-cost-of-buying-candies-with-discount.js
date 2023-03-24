/**
 * @param {number[]} cost
 * @return {number}
 */

/*
Input - int array, where cost[i] denotes the cost of the ith candy
Output - the min cost of buying all candies
Constr/Edge - no empty inputs
Plan - 
- sort input array
- loop backwards thru sorted array
- have a counter keep track of every 3
- keep track of running sum of cost
*/
var minimumCost = function(cost) {
  let sorted = cost.sort((a, b) => b - a);
  let sum = 0;
  for (let i = 0; i < sorted.length; i+=3) {
    let combo = [sorted[i], sorted[i+1] || 0, sorted[i+2] || 0];
    sum += combo[0] + combo[1];
  }
  return sum;
};