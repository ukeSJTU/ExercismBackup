//
// This is only a SKELETON file for the 'Conway's Game of Life' exercise. It's been provided
// as a convenience to get you started writing code faster.
//

export class GameOfLife {
  constructor(initialState) {
    // Initialize the game state with a deep copy of the input 2D array
    this.currentState = initialState.map(row => [...row]);
  }

  tick() {
    // Handle empty matrix case
    if (this.currentState.length === 0) {
      return;
    }
    
    // Execute one evolution step, updating to the next generation
    const rows = this.currentState.length;
    const cols = this.currentState[0].length;
    const nextState = Array(rows).fill(null).map(() => Array(cols).fill(0));

    // Iterate through each cell
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const liveNeighbors = this.countLiveNeighbors(i, j);
        const currentCell = this.currentState[i][j];

        // Apply Conway's Game of Life rules
        if (currentCell === 1) {
          // Rules for live cells
          if (liveNeighbors === 2 || liveNeighbors === 3) {
            nextState[i][j] = 1; // Survives
          } else {
            nextState[i][j] = 0; // Dies (underpopulation or overpopulation)
          }
        } else {
          // Rules for dead cells
          if (liveNeighbors === 3) {
            nextState[i][j] = 1; // Becomes alive (reproduction)
          } else {
            nextState[i][j] = 0; // Stays dead
          }
        }
      }
    }

    // Update current state
    this.currentState = nextState;
  }

  state() {
    // Return a deep copy of the current game state
    return this.currentState.map(row => [...row]);
  }

  // Helper method: count live neighbors around a given position
  countLiveNeighbors(row, col) {
    const rows = this.currentState.length;
    const cols = this.currentState[0].length;
    let count = 0;

    // Check all 8 directions around the cell
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],  // Top row
      [0, -1],           [0, 1],   // Left and right
      [1, -1],  [1, 0],  [1, 1]    // Bottom row
    ];

    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;

      // Check boundaries
      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
        count += this.currentState[newRow][newCol];
      }
    }

    return count;
  }
}
