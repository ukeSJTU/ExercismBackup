export class HighScores {
  constructor(scores) {
    // Store the scores array
    this._scores = scores;
  }

  // Return all scores
  get scores() {
    return this._scores;
  }

  // Return the most recently added score (last element)
  get latest() {
    return this._scores[this._scores.length - 1];
  }

  // Return the highest score
  get personalBest() {
    return Math.max(...this._scores);
  }

  // Return the top three highest scores in descending order
  get personalTopThree() {
    // Create a copy, sort in descending order, and take first 3
    return [...this._scores]
      .sort((a, b) => b - a)
      .slice(0, 3);
  }
}
