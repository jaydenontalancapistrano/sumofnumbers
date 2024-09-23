function sumFor(arr: number[]): number {
  let sum: number = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }
  console.log(sum);
  return sum;
}

function sumWhile(arr: number[]): number {
  let sum: number = 0;
  let i: number = 0;
  while (i < arr.length) {
      sum += arr[i];
      i++;
  }
  console.log(sum);
  return sum;
}

function sumRecursion(arr: number[]): number {
  if (arr.length === 0) {
      return 0;
  }
  const [first, ...rest] = arr;
  const sum: number = first + sumRecursion(rest);
  console.log(sum);
  return sum;
}

function sumTheFunctionalWay(arr: number[]): number {
  const sum: number = arr.reduce((acc: number, num: number) => acc + num, 0);
  console.log(sum);
  return sum;
}

console.log(sumFor([1, 2, 3, 4])); // Outputs: 10
console.log(sumWhile([1, 2, 3, 4])); // Outputs: 10
console.log(sumRecursion([1, 2, 3, 4])); // Outputs: 10
console.log(sumTheFunctionalWay([1, 2, 3, 4])); // Outputs: 10