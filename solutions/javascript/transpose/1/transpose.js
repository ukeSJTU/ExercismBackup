export const transpose = (input) => {
  // Handle empty input
  if (!input || input.length === 0) {
    return [];
  }
  
  // Find the maximum length among all rows
  const maxLength = Math.max(...input.map(row => row.length));
  
  // Create result array
  const result = [];
  
  // Iterate through each column position
  for (let col = 0; col < maxLength; col++) {
    let column = '';
    
    // Iterate through each row
    for (let row = 0; row < input.length; row++) {
      // If this row has a character at this column position
      if (col < input[row].length) {
        column += input[row][col];
      } else {
        // Pad with space only if there are more rows below
        // that have characters at this column position
        let hasCharBelow = false;
        for (let nextRow = row + 1; nextRow < input.length; nextRow++) {
          if (col < input[nextRow].length) {
            hasCharBelow = true;
            break;
          }
        }
        
        if (hasCharBelow) {
          column += ' ';
        }
      }
    }
    
    result.push(column);
  }
  
  return result;
};
