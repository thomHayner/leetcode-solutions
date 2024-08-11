/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let result = "";
    let digitsArr = String(num).split('');
    let digitsArrLen = digitsArr.length;
    
    digitsArr.map((n,i) => {
        let nLen = digitsArrLen-i;
        let digit = nLen === 1 ? Number(n) : Number(n[0]);
        let numerals = [];
        let digitToRoman = ""

        switch (nLen) {
            case 1:
                numerals = ['I','V','X'];
                break
            case 2:
                numerals = ['X','L','C'];
                break
            case 3:
                numerals = ['C','D','M'];
                break
            default:
                numerals = ['M','M','M'];
                break
        }

        switch (digit) {
            case 1:
                result += numerals[0]
                break
            case 2:
                result += numerals[0] + numerals[0]
                break
            case 3:
                result += numerals[0] + numerals[0] + numerals[0] 
                break
            case 4:
                result += numerals[0] + numerals[1] 
                break
            case 5:
                result += numerals[1]
                break
            case 6:
                result += numerals[1] + numerals[0]
                break
            case 7:
                result += numerals[1] + numerals[0] + numerals[0]
                break
            case 8:
                result += numerals[1] + numerals[0] + numerals[0] + numerals[0]
                break
            case 9:
                result += numerals[0] + numerals[2]
                break
            default:
                break
        }
    })
    return result
};
