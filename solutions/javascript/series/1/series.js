export class Series {
  constructor(series) {
    if (series === undefined || series === null) {
      throw new Error('series cannot be empty');
    }
    this.series = series;
  }

  slices(sliceLength) {
    if (sliceLength < 0) {
      throw new Error('slice length cannot be negative');
    }
    
    if (sliceLength === 0) {
      throw new Error('slice length cannot be zero');
    }
    
    if (this.series.length === 0) {
      throw new Error('series cannot be empty');
    }
    
    if (sliceLength > this.series.length) {
      throw new Error('slice length cannot be greater than series length');
    }
    
    const result = [];
    for (let i = 0; i <= this.series.length - sliceLength; i++) {
      const slice = this.series.slice(i, i + sliceLength).split('').map(Number);
      result.push(slice);
    }
    
    return result;
  }
}
