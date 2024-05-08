/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    const sorted = score.slice().sort((a, b) => b - a)
    console.log(sorted)

    const arr = []
    score.forEach(item => {
        const position = sorted.indexOf(item) + 1
        if (position === 1) {
            arr.push("Gold Medal")
        } else if (position === 2) {
            arr.push("Silver Medal")
        } else if (position === 3) {
            arr.push("Bronze Medal")
        } else {
            arr.push(position.toString())
        }
    })
    console.log(arr)
    return arr
};