/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const y = x.toString().split('').reverse('').join('')
    if(y==x){
        return true;
    }
    else{
        return false;
    }
};