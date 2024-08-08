/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const len = s.length;
    const starts = ["(", "[", "{"];
    const sArr = s.split('');
    let rArr = [];
    let pass = true;

    if (len % 2 !== 0) {
        pass = false
    } else if (!starts.includes(sArr[0])) {
        pass = false
    } else {
        sArr.map((n) => {
            if (starts.includes(n)) {
                rArr.push(n);
            } else {
                switch (n) {
                    case ")":
                        if (rArr.at(-1) === "(") {
                            rArr.pop();
                            break;
                        } else {
                            pass = false;
                            break;
                        }
                    case "]":
                        if (rArr.at(-1) === "[") {
                            rArr.pop();
                            break;
                        } else {
                            pass = false;
                            break;
                        }
                    case "}":
                        if (rArr.at(-1) === "{") {
                            rArr.pop();
                            break;
                        } else {
                            pass = false;
                            break;
                        }
                }
            }
        })
    };

    if (rArr.length > 0) {
        pass = false
    }
    return pass
    //pass
};
