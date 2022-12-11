/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    // Divide & conquer - uneven sequences cannot be closed.
    if (s.length % 2 !== 0) {
        return false;
    }

    let i = 0;
    while (i < s.length) {
        console.log(i);
        console.log(`Extremes: ${s[i]} ${s[s.length - i - 1]}`)
        // Verifies if parentheses are correctly closed on the extremes
        if (!validClosure(s[i], s[s.length - i - 1])) {
            // If they aren't, the answer must be in the next character
            if (!validClosure(s[i], s[i+1])) {
                return false;
            }
            i += 2;
        } else {
            i += 1;
        }
    }
    return true;
};

function validClosure(char1, char2) {
    if (char1 === "(") {
        return char2 === ")";
    }

    if (char1 === "[") {
        return char2 === "]";
    }

    if (char1 === "{") {
        return char2 === "}";
    }
}

let s = "([])";
console.log(isValid(s));