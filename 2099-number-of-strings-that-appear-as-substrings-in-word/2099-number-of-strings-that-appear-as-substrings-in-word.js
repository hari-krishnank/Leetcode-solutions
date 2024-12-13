/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
    let count = 0
    for (let i = 0; i < patterns.length; i++) {
        // console.log(patterns[i])
        if (word.includes(patterns[i])) {
            console.log(patterns[i])
            count++
            console.log(count)
        }
    }
    // console.log(count)
    return count
};