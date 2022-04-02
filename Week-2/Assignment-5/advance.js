function binarySearchPosition(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    do {
        var mid = Math.floor((left + right) / 2);

        if (target === numbers[mid]) {
            return mid;
        } else if (target < numbers[mid]) {
            right = mid;
        } else {
            left = mid + 1;
        }

    } while (numbers[mid] !== target)



}
console.log(binarySearchPosition([1, 3, 4, 6, 8, 11, 12], 11));
console.log(binarySearchPosition([1, 2, 5, 6, 7, 10], 7));