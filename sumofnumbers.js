function sumFor(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
    return sum;
}
function sumWhile(arr) {
    var sum = 0;
    var i = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    console.log(sum);
    return sum;
}
function sumRecursion(arr) {
    if (arr.length === 0) {
        return 0;
    }
    var first = arr[0], rest = arr.slice(1);
    var sum = first + sumRecursion(rest);
    console.log(sum);
    return sum;
}
function sumTheFunctionalWay(arr) {
    var sum = arr.reduce(function (acc, num) { return acc + num; }, 0);
    console.log(sum);
    return sum;
}
console.log(sumFor([1, 2, 3, 4])); // Outputs: 10
console.log(sumWhile([1, 2, 3, 4])); // Outputs: 10
console.log(sumRecursion([1, 2, 3, 4])); // Outputs: 10
console.log(sumTheFunctionalWay([1, 2, 3, 4])); // Outputs: 10
