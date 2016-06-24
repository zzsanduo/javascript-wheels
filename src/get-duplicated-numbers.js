/**
 * Get the duplicated numbers from array
 */

function getDuplicatedNumbers1(array) {
    if (!array || !Array.isArray(array)) {
        return;
    }
    var result = [];
    var dict = {};
    for (var i = 0; i < array.length; i++) {
        if (dict[array[i]] && result.indexOf(array[i]) === -1) {
            result.push(array[i]);
        } else {
            dict[array[i]] = true;
        }
    }

    return result;
}

function getDuplicatedNumbers1(array) {
    if (!array || !Array.isArray(array)) {
        return;
    }
    var sortedArray = array.slice().sort();
    var result = [];
    for (var i = 1; i < sortedArray.length; i++) {
        if (sortedArray[i] === sortedArray[i - 1] && result.indexOf(sortedArray[i]) === -1)
            result.push(sortedArray[i]);
    }

    return result;
}



module.exports.method1 = getDuplicatedNumbers1;
module.exports.method2 = getDuplicatedNumbers1;