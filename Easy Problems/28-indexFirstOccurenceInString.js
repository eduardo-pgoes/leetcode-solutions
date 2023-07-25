/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  const upperLimit = haystack.length - needle.length;
  for (let i = 0; i <= upperLimit; i += 1) {
    const substr = (haystack.slice(i, needle.length + i));

    if (substr === needle) return i;
  }

  return -1;
};

console.log(strStr('a', 'a'))