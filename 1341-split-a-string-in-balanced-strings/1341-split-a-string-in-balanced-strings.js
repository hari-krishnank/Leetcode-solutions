/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let countL = 0, countR = 0, count = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'L') {
            countL++
        }
        if (s[i] === 'R') {
            countR++;
        }
        if (countL === countR) {
            count++
        }
    }
    return count;
};