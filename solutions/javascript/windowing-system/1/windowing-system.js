// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size(); // Default size (80, 60)
    this.position = new Position(); // Default position (0, 0)
  }

  resize(newSize) {
    // Minimum bounds: width and height must be at least 1
    let width = Math.max(1, newSize.width);
    let height = Math.max(1, newSize.height);

    // Maximum bounds: cannot exceed screen boundaries considering current position
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    width = Math.min(width, maxWidth);
    height = Math.min(height, maxHeight);

    this.size.resize(width, height);
  }

  move(newPosition) {
    // Minimum bounds: x and y must be at least 0
    let x = Math.max(0, newPosition.x);
    let y = Math.max(0, newPosition.y);

    // Maximum bounds: cannot move past screen boundaries considering current size
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    x = Math.min(x, maxX);
    y = Math.min(y, maxY);

    this.position.move(x, y);
  }
}

export function changeWindow(programWindow) {
 const newSize = new Size(400, 300);
  programWindow.resize(newSize);

  const newPosition = new Position(100, 150);
  programWindow.move(newPosition);

  return programWindow; 
}