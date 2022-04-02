function count(input) {
    const countObj = {}
    for (let i = 0; i < input.length; i++) {
        if (!Object.keys(countObj).includes(input[i])) {
            countObj[input[i]] = 0;
        }
        countObj[input[i]] += 1;
    }
    return countObj;
}
let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'x'];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}


function groupByKey(input) {
    const sumByKey = {};
    for (let i = 0; i < input.length; i++) {
        if (!Object.keys(sumByKey).includes(input[i].key)) {
            sumByKey[input[i].key] = 0;
        }
        sumByKey[input[i].key] += input[i].value;
    }
    return sumByKey;

}


let input2 = [
    { key: 'a', value: 3 },
    { key: 'b', value: 1 },
    { key: 'c', value: 2 },
    { key: 'a', value: 3 },
    { key: 'c', value: 5 }
]
console.log(groupByKey(input2));
    // should print {a:6, b:1, c:7}