/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let swap;
    for (let i = 0; i < m+n; i++) {
        if (nums2[i] < nums1[i]) {
            // Swap nums2 with nums1
            nums2[i] = nums1[i];
        }
    }
};