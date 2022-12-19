/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let map1 = new Map(), map2 = new Map();
    for (let n of nums1) {
        if (!map1.get(n)) {
            map1.set(n, 1);
        }
    }
    
    for (let n of nums2) {
        if (!map2.get(n)) {
            map2.set(n, 1);
        }
    }

    let ans = [[], []];
    
    // Difference between A1 and A2
    for (let n of map1) {
        if (!map2.get(n[0])) {
            ans[0].push(n[0]);
        }
    }
    
    // Difference between A2 and A1
    for (let n of map2) {
        if (!map1.get(n[0])) {
            ans[1].push(n[0]);
        }
    }
    return ans;
};

let nums1 = [1,2,3], nums2 = [2,4,6];
console.log(findDifference(nums1, nums2));