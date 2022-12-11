/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let size = m+n;
    let i = m, j = 0, k = 0;

    // Inserindo os elementos de nums2 ao final de nums1.
    while (i < size) {
        nums1[i] = nums2[j++];
        i++;
    }

    nums1.sort((a,b) => {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });
};

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
merge(nums1, m, nums2, n);