/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let k = 0, index;
    switch (ruleKey) {
        case "type":
            index = 0;
            break;
        case "color":
            index = 1;
            break;
        case "name":
            index = 2;
            break;
    }
    for (let item of items) {
        if (item[index] === ruleValue) {
            k++;
        }
    }
    return k; 
};