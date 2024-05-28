/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
    newArray = []
    for (let i = 0; i < words.length; i++) {
        let res = words[i].split('')
        if (res.length > 0) {
            newArray.push(res[0])
        }
    }
    let ans = newArray.join('')
    console.log(ans)
    if (s == ans) {
        return true
    } else {
        return false
    }
};