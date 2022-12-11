/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "", maxPrefixIndex;
    let minLength = 200, minLengthIndex;

    if (strs.length === 1) {
        return strs[0];
    }

    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < minLength) {
            minLength = strs[i].length;
            minLengthIndex = i;
        }
    }

    let foundSomethingWrong = false;
    for (let i = 0; i < strs.length - 1; i++) {
        for (let j = 0; j < minLength; j++) {
            if (strs[i+1][j] !== strs[i][j]) {
                console.log(strs[i+1][j]);
                console.log(strs[i][j])
                maxPrefixIndex = i;
                foundSomethingWrong = true;
                break;
            }
        }
        if (foundSomethingWrong) break;
    }

    if (maxPrefixIndex === 0) {
        return "";
    } else {
        return strs[minLengthIndex].slice(0, maxPrefixIndex+1);
    }
};

let strs = ["ab", "a"];
longestCommonPrefix(strs);