/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.split(" ").filter((value) => value.length > 0);
    return arr[arr.length - 1].length;
};

let s = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(s));