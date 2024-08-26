/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // Get length first so that it can be reused without recalculating
    let sLen = s.length;

    // Create a set for storing substring
    // (set lookups are faster than array lookups)
    let current = new Set();

    // Create a left pointer for tracking left end of current substring
    let left = 0;

    // Create a length tracker as a return
    let longest = 0;

    if (sLen <= 1) {
        return sLen
    };
    
    // The right pointer will loop through the string
    for (let right = 0; right < sLen; right++) {
        
        // If the set contains the right pointer
        while (current.has(s[right])) {
            // Then delete the left pointer...
            current.delete(s[left]);
            // And increment the left pointer
            left++
        };
        
        // Else, add the right pointer to the set
        current.add(s[right]);

        // Then check the size of the current set
        // (using Math.max is faster than a set.size with an if comparison)
        longest = Math.max(current.size, longest);
    }
    // And finally, return the length of the longest substring
    return longest
}

