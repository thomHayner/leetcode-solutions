/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
        let trues = [...nums].map((n,i,a) => a.includes(target-n)?[n,i]:[]).filter(n => n.length === 2)
        return trues.length === 2 ?
                trues.map((n,i,a) => n[1])
            :
                trues.filter(n => n[0] !== (target/2)).map((n,i,a) => n[1])
};
