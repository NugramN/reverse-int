module.exports = function reverse(n) {
    let result = '';
    if (n > 0) {
        result = String(n).split("").reverse().join("");
    } else {
        result = String(-1 * n).split("").reverse().join("");
    }
    return result;
}
