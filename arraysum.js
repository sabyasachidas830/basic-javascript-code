function sumArray(arr, n) {
  if (n <= 0) {
    return 0;
  }
  return arr[n - 1] + sumArray(arr, n - 1);
}
const numbers = [45, 55, 124, 46, 58];
const result = sumArray(numbers, numbers.length);
console.log("Sum of array =", result);

