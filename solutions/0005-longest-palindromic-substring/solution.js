/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let sLen = s.length;

    if (sLen < 2) {
        return s
    };

    let left = 0;
    let right = 0;

    const checker = (s, left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }
    
    for (let i = 0; i < sLen; i++) {
        const odd = checker(s,i,i);
        const even = checker(s,i,i+1);
        let longest = Math.max(odd,even);

        if (longest > right-left) {
            left = i - Math.floor((longest-1)/2);
            right = i + Math.floor(longest/2);
        }
    }
    return s.slice(left, right + 1)
};
