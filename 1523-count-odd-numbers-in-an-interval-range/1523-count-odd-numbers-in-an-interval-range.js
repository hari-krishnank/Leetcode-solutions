/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let total = high - low + 1
    let odds = Math.floor(total/2)


    if(total%2 == 1 && low%2 ==1) {
        odds++
    }
    console.log(odds)
    return odds
    
};