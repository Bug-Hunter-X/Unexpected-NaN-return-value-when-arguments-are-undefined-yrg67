# Unexpected NaN return value when arguments are undefined

This repository demonstrates a common JavaScript bug where a function returns NaN instead of the expected null value when both arguments are undefined. 

The `foo` function in `bug.js` is designed to return null if either or both arguments `a` and `b` are null. However, if both arguments are undefined, it unexpectedly returns NaN instead of null. 

The corrected version of the function in `bugSolution.js` addresses this issue by explicitly checking for both null and undefined values.