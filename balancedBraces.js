const checkIfBalanced = (expression) => {
  const stack = [];
  for (let symbol of expression) {
    if (symbol === '(') {
      stack.push(symbol);
    } else if (symbol === ')') {
      if (!stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
};