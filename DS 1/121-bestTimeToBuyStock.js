/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let i, maxProfit = 0, buyPrice = prices[0];

    for (i = 0; i < prices.length; i++) {
        if (buyPrice > prices[i]) {
            buyPrice = prices[i];
        } else if (prices[i] - buyPrice > maxProfit) {
            maxProfit = prices[i] - buyPrice;
        }
    }  
    return maxProfit;
};

let prices = [7,6,4,3,1];
console.log(maxProfit(prices));