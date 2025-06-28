const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let line of input) {
  if (line === ".") break;

  const stack = [];
  let isBalanced = true;

  for (let char of line) {
    if (char === "(" || char === "[") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0 || stack[stack.length - 1] !== "(") {
        isBalanced = false;
        break;
      }
      stack.pop();
    } else if (char === "]") {
      if (stack.length === 0 || stack[stack.length - 1] !== "[") {
        isBalanced = false;
        break;
      }
      stack.pop();
    }
  }

  if (isBalanced && stack.length === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
