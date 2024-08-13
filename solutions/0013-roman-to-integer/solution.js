/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let numerals = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
    
    return s.split('').reverse().map(n=>numerals[`${n}`]).map((n,i,a)=>n<a[i-1]?-n:n).reduce((a,b)=>a+b);
};

