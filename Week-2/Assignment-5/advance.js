function binarySearchPosition(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    let index = -1;
    let mid;

    do {
        mid = Math.floor((left + right) / 2);

        if (target === numbers[mid]) {
            index = mid
            return index;

        } else if (target < numbers[mid]) {
            right = mid - 1;

        } else {
            left = mid + 1;
        }

    } while (left <= right)

    return index



}
console.log(binarySearchPosition([1, 3, 4, 6, 8, 11, 12], 10));
console.log(binarySearchPosition([1, 2, 5, 6, 7, 10], 7));