/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    let shuffle = []
    for (let i = 0; i < indices.length; i++){
        shuffle[indices[i]] = s[i]
    }
    console.log(shuffle)
    return shuffle.join('')
};