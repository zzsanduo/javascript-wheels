/**
 * Get the duplicated items from array
 */

function getDuplicatedItems1(array) {
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

function getDuplicatedItems2(array) {
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



module.exports.method1 = getDuplicatedItems1;
module.exports.method2 = getDuplicatedItems2;