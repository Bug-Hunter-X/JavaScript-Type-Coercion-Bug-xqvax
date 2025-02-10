# JavaScript Type Coercion Bug

This repository demonstrates a common yet easily overlooked bug in JavaScript: type coercion during arithmetic operations.  Specifically, it highlights how the addition operator (+) behaves when applied to a mix of number and string types.

The `bug.js` file showcases the unexpected result of adding a number and a string.  The `bugSolution.js` file provides a solution to this problem.

## Bug Description
JavaScript's loose typing can lead to unexpected behavior when combining different data types.  The addition operator attempts to perform the most logical operation based on the provided operands.  If one operand is a string, it coerces the other operand to a string and then performs string concatenation. This often leads to errors in arithmetic calculations.