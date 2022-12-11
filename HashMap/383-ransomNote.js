/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// ransomNote.length = n, magazine.length = m => worst case O(m + n) complexity
var canConstruct = function(ransomNote, magazine) {
    let ransomMap = {};
    let magazineMap = {};
    
    // build map for instances of each letter in magazine.
    for (let letter of magazine) {
        if (letter in magazineMap) {
            magazineMap[letter]++;
        } else {
            magazineMap[letter] = 1;
        }
    }

    for (let letter of ransomNote) {
        // if the letter isn't in the magazineMap, don't even bother checking further
        if (!(letter in magazineMap)) {
            return false;
        }

        // build the ransomMap normally... 
        if (letter in ransomMap) {
            ransomMap[letter]++;
        } else {
            ransomMap[letter] = 1;
        }

        // if we have more of that letter in ransom than magazine, then we can't build it.  
        if (ransomMap[letter] > magazineMap[letter]) {
            return false;
        }
    }
    
    // survived all tests? fine, we can build it.
    return true;
};

let ransomNote = "aa", magazine = "aab";
console.log(canConstruct(ransomNote, magazine));