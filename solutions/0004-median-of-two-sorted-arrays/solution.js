/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const combArr = nums1.concat(nums2).sort((a,b) => a-b);
    const len = combArr.length
    return len % 2 === 0 ? 
        (combArr[(len/2)-1] + combArr[len/2]) / 2
        :
        combArr[Math.floor(len/2)]
};
