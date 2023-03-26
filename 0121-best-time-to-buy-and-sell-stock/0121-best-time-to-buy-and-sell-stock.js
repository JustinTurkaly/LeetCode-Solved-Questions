/**
 * @param {number[]} prices
 * @return {number}
 */

/*
Input - an array of ints representing stock prices on the ith day
Output - the max profit you can make from array
Constr/Edge - no empty inputs, price can be zero
Plan - 
- keep track of max profit
- loop thru prices array starting at 1 index
  - calc current profit on these days
  - reassign the min buy price to the smallest value you see
  - update the maxprofit to largest profit you've seen
- return maxProfit
*/
var maxProfit = function(prices) {
  let max = 0;
  let minBuyPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    let sellPrice = prices[i];
    let currProfit = sellPrice - minBuyPrice;
    minBuyPrice = Math.min(minBuyPrice, sellPrice);
    max = Math.max(max, currProfit);
  } 
  return max;
};