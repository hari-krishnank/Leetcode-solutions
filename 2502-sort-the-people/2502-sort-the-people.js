/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    let arr = []
    for (i = 0; i < names.length; i++) {
        arr.push([names[i], heights[i]])
    }
    let sort = arr.sort((a, b) => b[1] - a[1])

    let str = []
    for (i = 0; i < sort.length; i++) {
        str.push(sort[i][0])
    }
    
    console.log(str)
    return str
};