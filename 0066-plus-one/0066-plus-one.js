/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let res = digits.join('').toString()
    // let b = parseInt(res) + 1
    let b = BigInt(res) + BigInt(1)
    console.log(b)

    let ans = Array.from(b.toString(),Number)
    console.log(ans)
    return ans
};