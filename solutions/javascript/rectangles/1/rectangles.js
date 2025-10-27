export function count(diagram) {
  if (!diagram || diagram.length === 0) {
    return 0;
  }
  
  const lines = diagram;
  const rows = lines.length;
  const cols = lines[0] ? lines[0].length : 0;
  
  if (rows === 0 || cols === 0) {
    return 0;
  }
  
  let rectangleCount = 0;
  
  // Try all possible top-left corners
  for (let r1 = 0; r1 < rows; r1++) {
    for (let c1 = 0; c1 < cols; c1++) {
      if (lines[r1][c1] !== '+') continue;
      
      // Try all possible bottom-right corners
      for (let r2 = r1 + 1; r2 < rows; r2++) {
        for (let c2 = c1 + 1; c2 < cols; c2++) {
          if (lines[r2][c2] !== '+') continue;
          
          // Check if this forms a valid rectangle
          if (isRectangle(lines, r1, c1, r2, c2)) {
            rectangleCount++;
          }
        }
      }
    }
  }
  
  return rectangleCount;
}

function isRectangle(lines, r1, c1, r2, c2) {
  // Check if all four corners are '+'
  if (lines[r1][c2] !== '+' || lines[r2][c1] !== '+') {
    return false;
  }
  
  // Check top horizontal edge
  for (let c = c1 + 1; c < c2; c++) {
    if (lines[r1][c] !== '-' && lines[r1][c] !== '+') {
      return false;
    }
  }
  
  // Check bottom horizontal edge
  for (let c = c1 + 1; c < c2; c++) {
    if (lines[r2][c] !== '-' && lines[r2][c] !== '+') {
      return false;
    }
  }
  
  // Check left vertical edge
  for (let r = r1 + 1; r < r2; r++) {
    if (lines[r][c1] !== '|' && lines[r][c1] !== '+') {
      return false;
    }
  }
  
  // Check right vertical edge
  for (let r = r1 + 1; r < r2; r++) {
    if (lines[r][c2] !== '|' && lines[r][c2] !== '+') {
      return false;
    }
  }
  
  return true;
}
