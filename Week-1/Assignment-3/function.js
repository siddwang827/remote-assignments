function countAandB(input) {
    // var count = 0
    // for (var i = 0; i < input.length; i++) {
    //     if (input[i] === "a" || input[i] === "b") {
    //         count += 1;
    //     }
    // }
    count = input.filter(ele => ['a', 'b'].includes(ele)).length
    return count;
}
function toNumber(input) {
    // var out = []
    // for (var i = 0; i < input.length; i++) {
    //     out.push(input[i].charCodeAt(0) - 96)
    // }
    var out = input.map(ele => ele.charCodeAt(0) - 96);
    return out;
}
let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]
let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]