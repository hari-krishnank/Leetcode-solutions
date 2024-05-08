/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let balance = 0
    let week = 0
    let day = 1
    for (let i = 1; i <= n; i++) {
        balance += week + day
        day++
        if (i % 7 == 0) {
            week++
            day = 1
        }
    }
    return balance
};