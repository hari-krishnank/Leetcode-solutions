/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
    let a = s.split('')
    console.log(a)
    let asciiArr = []
    for (let i = 0; i < a.length; i++) {
        asciiArr.push(a[i].charCodeAt(0))
    }
    console.log('ASCII Array = ', asciiArr)
    let res = 0
    for (let i = 0; i < asciiArr.length - 1; i++) {
        res += Math.abs(asciiArr[i] - asciiArr[i + 1]) 
        console.log(res)
    }
    return res
};