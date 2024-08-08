/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let sorted = nums1.concat(nums2).sort((a, b) => a - b);
    let len = sorted.length
    return len % 2 === 0 ? (sorted[(len/2)-1] + sorted[len/2]) / 2 : sorted[Math.floor(sorted.length/2)]
};
