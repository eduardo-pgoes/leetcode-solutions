/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let sum = 0, maxSum = -1;
    // Traverse through lines
    for (let i = 0; i < accounts.length; i++) {
        sum = 0;
        // Sum the wealth on every bank account of the client.
        for (let j = 0; j < accounts[i].length; j++) {
            sum += accounts[i][j];
        }
        if (sum > maxSum) {
            maxSum = sum;
        }
    }
    return maxSum;
};

let accounts = [[1,2,3],[3,2,1]];
console.log(maximumWealth(accounts));