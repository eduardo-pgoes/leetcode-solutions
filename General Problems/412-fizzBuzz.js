/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer = [], currentStr;
    for (let i = 1; i <= n; i++) {
        currentStr = "";
        if (i%3===0) currentStr += "Fizz";
        if (i%5===0) currentStr += "Buzz";
        if (currentStr === "") currentStr = i.toString();
        answer.push(currentStr);
    }
    return(answer);
};

let n = 5;
console.log(fizzBuzz(n));