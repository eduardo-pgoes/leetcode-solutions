/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = x;

    if (x < 0) {
        res  *= -1;
        res = +res.toString().split("").reverse().join("") * -1;
    } else {
        res = +res.toString().split("").reverse().join("");
    }

    if (res > 0x7FFFFFFF || res < -0x7FFFFFFF) {
        return 0;
    }

    return res;
};

let x = 123;
console.log(reverse(x));