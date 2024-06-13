/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let a = s.replace(/[\W_]/g, "").toLowerCase();
    console.log(a)
    let b = a.split('').reverse().join('')
    console.log(b)

    if(a === b) {
        return true
    } else {
        return false
    }
};