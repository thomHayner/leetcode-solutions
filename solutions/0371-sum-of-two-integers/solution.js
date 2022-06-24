/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let bigger = Math.max(a,b);
    let aNeg = false;
    let bNeg = false;
    let bothNeg = false;
    let absA = Math.abs(a);
    let absB = Math.abs(b);
    let aArr = [];
    let bArr = [];
    let resultArr = [];
    
    if (a === 0) {return b};
    if (b === 0) {return a};
    if (a === b) {return a*2};
    if(absA === absB) {return 0};
    
    if (a < 0) {aNeg = true};
    if (b < 0) {bNeg = true};
    if (a < 0 && b < 0) {bothNeg = true};
    
    // both negative
    if (bothNeg) {
            while (aArr.length < absA) {resultArr.push(1);aArr.push(1)};
            while (bArr.length < absB) {resultArr.push(1);bArr.push(1)};
            return resultArr.length * -1
    };
    
    // b is negative
    if (bNeg) {
        if (bigger === a) {
            while (aArr.length < a) {resultArr.push(1);aArr.push(1)};
            while (bArr.length < absB) {resultArr.pop();bArr.push(1)};
            return resultArr.length
        };
        if (bigger === b) {
            while (bArr.length < absB) {resultArr.push(1);bArr.push(1)};
            while (aArr.length < a) {resultArr.pop();aArr.push(1)};
            return resultArr.length * -1
        };
    };
    
    // a is negative   
    if (aNeg) {
        if (bigger === a) {
            while (aArr.length < absA) {resultArr.push(1);aArr.push(1)};
            while (bArr.length < b) {resultArr.pop();bArr.push(1)};
            return resultArr.length * -1
        };
        if (bigger === b) {
            while (bArr.length < b) {resultArr.push(1);bArr.push(1)};
            while (aArr.length < absA) {resultArr.pop();aArr.push(1)};
            return resultArr.length
        };
    };
    
    // both positive
    while (aArr.length < a) {resultArr.push(1);aArr.push(1)};
    while (bArr.length < b) {resultArr.push(1);bArr.push(1)};
    return resultArr.length
};
