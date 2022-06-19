/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (nums.length === 2 ) {
        return [0,1]
    }
    for (let i = 0; i < nums.length; i++) {
        // if (i <= target) {
            for ( j = i+1; j < nums.length; j++) {
                if (nums[j]+nums[i] === target) {
                    return [i,j]
                }
            }
        // }
    }
};
