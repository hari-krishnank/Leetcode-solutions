/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let obj = {}
    let ans = 0
    for (let word of s) {
        if (obj[word]) {
            obj[word]++
        } else {
            obj[word] = 1
        }
        if (obj[word] % 2 === 0) {
            ans += 2
        }
    }
    console.log(obj)
    return s.length > ans ? ans + 1: ans
};
