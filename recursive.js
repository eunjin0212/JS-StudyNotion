const arr = [0, 1];
const input = 4;
function factorial(n) {
  if (n === 1) {
    return n;
  }
  return n * factorial(n - 1);
}
console.log(factorial(input));
function fibo(n) {
  if (n === 0 || n === 1 || arr[n]) {
    return arr[n];
  }
  arr[n] = fibo(n - 1) + fibo(n - 2);
  return arr[n];
}
console.log(fibo(input));

function fibo2(n) {
  if (n <= 1) return n;
  return fibo2(n - 1) + fibo2(n - 2);
}

console.log(fibo2(input));
