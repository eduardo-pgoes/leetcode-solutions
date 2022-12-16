// Available @ https://leetcode.com/problems/plus-one

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let length = digits.length - 1;

    
    // Divide & conquer approach
    // 1st case - last digit != 9
    if (digits[length] != 9) {
        digits[length] += 1;
        return digits;
    }

    // 2nd case - last digit is 9 (we need another digit)
    digits.unshift(0); // if we don't need the extra digit, we'll remove it later.
    length++;

    let carry = true;

    // Carry on the added number, digit by digit, until we find a digit that isn't a 9  
    for (let i = length; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
        } else {
            digits[i]++;
            carry = false;
        }

        if (!carry) {
            break;
        }
    }

    if (digits[0] === 0) {
        digits.shift();
    }

    return digits;
};

let digits = [9, 8, 9];
console.log(plusOne(digits));