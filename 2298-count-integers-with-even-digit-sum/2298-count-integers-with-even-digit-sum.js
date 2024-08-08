/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
    let count = 0
    for (let i = 1; i <= num; i++) {
        if (i < 10 && i % 2 == 0) {
            count++
        } else if (i > 9) {
            let sp = i.toString().split('')
            let sum = 0
            for (let j = 0; j < sp.length; j++) {
                sum = sum + parseInt(sp[j])
            }
            if (sum % 2 === 0) {
                count++
            }
        }
    }
    console.log(count)
    return count
}