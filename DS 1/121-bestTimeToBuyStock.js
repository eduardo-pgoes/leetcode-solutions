/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let i, currentProfit = -1;

    for (i = 0; i < prices.length; i++) {
        currentPricesArr = prices.slice(i);
        let bestSliceProfit = Math.max(...currentPricesArr) - currentPricesArr[0];
        currentProfit = Math.max(currentProfit, bestSliceProfit);
    }  
    return (currentProfit > 0) ? currentProfit : 0;
};

let prices = [7,6,4,3,1];
console.log(maxProfit(prices));