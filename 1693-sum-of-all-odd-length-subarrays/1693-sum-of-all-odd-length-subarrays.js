/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
    let count = 1
    let sum = 0

    while (count) {
        for (let i = 0; i < arr.length; i++) {
            if ((count + i) <= arr.length) {
                for (let j = i; j < i + count; j++) {
                    sum = sum + arr[j]
                }
            }
        }
        count = count + 2

        if (count > arr.length) {
            count = 0
        }
    }
    return sum
}