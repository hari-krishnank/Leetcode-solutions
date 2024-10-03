/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    let numArr = num.split('');
    let oddArr = [];

    for (let i = 0; i < numArr.length; i++) {
        if (parseInt(numArr[i]) % 2 !== 0) {
            oddArr.push(num.substring(0, i + 1));
        }
    }
    if (oddArr.length === 0) {
        return "";
    }
    return oddArr[oddArr.length - 1];
};