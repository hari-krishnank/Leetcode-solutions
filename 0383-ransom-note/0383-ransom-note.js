/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < ransomNote.length; i++) {
        obj1[ransomNote[i]] = (obj1[ransomNote[i]] || 0) + 1;
    }
    
    for (let i = 0; i < magazine.length; i++) {
        obj2[magazine[i]] = (obj2[magazine[i]] || 0) + 1;
    }

    for (let key in obj1) {
        if (obj1[key] > (obj2[key] || 0)) {
            return false;
        }
    }
    return true
};  