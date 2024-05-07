/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let array = [{
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }]
    let count = 0;
    for(let i=0;i<s.length;i++){
        let value = array[0][s[i]]
        if(i+1<s.length && array[0][s[i+1]]>value){
            count -= value;
        }
        else{
            count += value;
        }
    }
    return count;
};