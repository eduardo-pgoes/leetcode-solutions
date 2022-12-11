/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let iterations = 0;
    while (num !== 0) {
        iterations++;
        if (num % 2 == 0) {
            num /= 2;
        } else {
            num--;
        }
    }
    return iterations;
};

let n = 14;
console.log(numberOfSteps(n));