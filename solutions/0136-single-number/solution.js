/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const numsLen = nums.length;
    let catchSet = new Set([nums[0]]);

    for (let i = 1; i < numsLen; i++) {
        if (catchSet.has(nums[i])) {
            catchSet.delete(nums[i]);
        } else {
            catchSet.add(nums[i]);
        }
    }
    return catchSet.values().next().value
};
