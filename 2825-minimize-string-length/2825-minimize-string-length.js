/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    let res = new Set(s)
    console.log(res)
    return res.size
};