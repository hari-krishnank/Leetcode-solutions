/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function (s, t) {

    let a = 0
    let b = 0
    while (a < s.length && b < t.length) {
        if (s[a] === t[b]) {
            b++
        }
        a++
    }
    console.log(t.length - b)
    return t.length - b

};