/**
 * a function that allow to copy object
 *
 */



function deepCopyArray(src, dest) {
    if (!dest || !src || !Array.isArray(src) || !Array.isArray(dest)) {
        return;
    }
    for (var i in src) {
        dest[i] = src[i];

        if (Array.isArray(src[i])) {
            dest[i] = [];
            deepCopyArray(src[i], dest[i]);
        } else if (typeof src[i] === "object") {
            dest[i] = {};
            copy(src[i], dest[i], true);
        }
    }
}

function copy(src, dest, deep) {
    if (!src || !dest || typeof src !== "object" || typeof dest !== "object") {
        return;
    }

    for (var p in src) {
        dest[p] = src[p];

        if (deep && Array.isArray(src[p])) {
            dest[p] = [];
            deepCopyArray(src[p], dest[p])
        } else if (deep && typeof src[p] === "object") {
            dest[p] = {};
            copy(src[p], dest[p], deep);
        }


    }
}

module.exports = copy;