function foo(a, b) {
  // Explicit type conversion
  return Number(a) + Number(b);
}

console.log(foo(1, '2')); // Output: 3

//Alternative using parseFloat or parseInt
function foo2(a, b) {
  return parseFloat(a) + parseFloat(b);
}
console.log(foo2(1, '2')); //Output: 3