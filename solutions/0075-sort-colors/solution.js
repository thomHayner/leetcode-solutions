/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
        let len = nums.length;
        let l = 0;
        let i = 0;
        let r = len - 1;
        
        while (i <= r) {
            if (nums[i] === 0) {
                [nums[l], nums[i]] = [nums[i], nums[l]];
                l++
            }
            if (nums[i] === 2) {
                [nums[i], nums[r]] = [nums[r], nums[i]];
                r--;
                i--;
            }
            i++
        }
}
