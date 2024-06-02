/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let a = s.join('')
    console.log(a)
    let stack = []


    for (let i = 0; i < a.length; i++) {
        stack.push(a[i])
    }
    console.log('stack', stack)
    let i = 0
    while (stack.length) {
        s[i] = stack.pop()
        i++
    }
    console.log('res',s)
    return s
};