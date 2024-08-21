/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    // Everything else fails due to Time Limit
    // Use recursion instead
    
    // Where n = nums.length, result length will always be: 2^n
    let numsLen = nums.length;
    
    // Declare an empty results array
    let resultsArr = [];
    let tempAdder = [];

    let recursiveSubsetBuilder = (i) => {
      if (i === numsLen) {
        resultsArr.push([...tempAdder]);
        return
      }
        
      tempAdder.push(nums[i]);
      recursiveSubsetBuilder(i+1);
      
      tempAdder.pop();
      recursiveSubsetBuilder(i+1);
    }
    recursiveSubsetBuilder(0)
    return resultsArr
};

