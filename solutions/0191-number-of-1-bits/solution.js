/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    return n.toString(2).split('').map(n=>parseInt(n)).reduce((a,b)=> a+b)
};
