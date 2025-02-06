function foo(a, b) {
  if (a === null || b === null) {
    return null; // This handles null values correctly
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo(1, null)); // null
console.log(foo(null, null)); // null

//The bug is that when both a and b are undefined the function still return 0 instead of null
console.log(foo(undefined, undefined)); //NaN, expected null