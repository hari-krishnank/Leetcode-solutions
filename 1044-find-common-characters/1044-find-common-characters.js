/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    let obj = {}
    for (const word of words[0]) {
        if (obj[word]) {
            obj[word]++
        } else {
            obj[word] = 1
        }
    }
    console.log('my:', obj)


    for (let i = 1; i < words.length; i++) {
        let current = {};
        for (let word of words[i]) {
            if (current[word]) {
                current[word]++;
            } else {
                current[word] = 1;
            }
        }
        console.log('current', current)

        for (let word in obj) {
            if (current[word]) {
                obj[word] = Math.min(obj[word], current[word]);
            } else {
                delete obj[word];
            }
        }
    }

    let result = [];
    for (let word in obj) {
        for (let i = 0; i < obj[word]; i++) {
            result.push(word);
        }
    }
    return result;
};