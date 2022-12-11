/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let intersection = [];
    let i, j;
    let indexValidado = [];
    for (i = 0; i < nums1.length; i++) {
        for (j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                if (indexValidado.indexOf(j) === -1) {
                    intersection.push(nums1[i]);
                    indexValidado.push(j);
                    break;
                }
            }
        }
    }
    return intersection;
};

let nums1 = [4,9,5], nums2 = [9,4,9,8,4];
console.log(intersect(nums1, nums2));