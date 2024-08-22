/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    // Try similar recursion as #78-Subsets
    // Generate an array of nums
    let nArr = [];
    for (let i=1;i<=n;i++){
        nArr.push(i);
    }

    // Declare an empty results array
    let resultsArr = [];

    // Declare and empty temporary subset holder array
    let subset = [];

    const recursiveSubsetBuilder = (i) => {
        // When we reach the end, of numsArr, end the recursion 
        if (i === n) {
            // Check the subset's length and add if equal to k
            if (subset.length === k) {
                resultsArr.push([...subset]);
            }
            // Exit the recursion loop
            return
        }
        
        // Build a positive subset and recurse
        subset.push(nArr[i])
        recursiveSubsetBuilder(i+1);

        // Build a negative subset and recurse
        subset.pop()
        recursiveSubsetBuilder(i+1);
    }
    recursiveSubsetBuilder(0)
    return resultsArr
};
