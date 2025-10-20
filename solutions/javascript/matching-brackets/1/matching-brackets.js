export const isPaired = (text) => {
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  
  const stack = [];
  
  for (const char of text) {
    // If it's an opening bracket, push to stack
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    }
    // If it's a closing bracket, check for match
    else if (char === ')' || char === ']' || char === '}') {
      // Check if stack is empty or if brackets don't match
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    }
    // Ignore all other characters
  }
  
  // Stack should be empty if all brackets are matched
  return stack.length === 0;
};
