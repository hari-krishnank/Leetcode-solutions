/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let res = s.split(' ')

    let ans = res.map(a => a.split('').reverse().join(''))
    console.log(ans)

    let reversed = ans.join(' ')
    return reversed
};