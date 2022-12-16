/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let i = 0;
    let profit = 0;
    let valley = prices[0], peak = prices[0];

    while (i < prices.length - 1) {
        // If this condition failed, i is a valley.
        while (prices[i] >= prices[i+1]) {
            i++;
        }
        valley = prices[i];
        while (prices[i] <= prices[i+1]) {
            i++;
        }
        peak = prices[i];
        
        profit += peak - valley;
        
    }
    return profit;
};

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));