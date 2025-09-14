//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  if (books.length === 0) return 0;

  const bookCounts = books.reduce((counts, book) => {
    counts[book] = (counts[book] || 0) + 1;
    return counts;
  }, {});
  
  const counts = Object.values(bookCounts).sort((a, b) => b - a);
  
  const basePrice = 800; // 800 cents
  const discounts = [0, 0, 0.05, 0.10, 0.20, 0.25];
  
  function calculateMinCost(counts) {
    const memo = new Map();
    
    function dp(remaining) {
      const key = remaining.join(',');
      if (memo.has(key)) return memo.get(key);
      
      if (remaining.every(count => count === 0)) {
        return 0;
      }
      
      let minCost = Infinity;
      
      for (let groupSize = 1; groupSize <= 5; groupSize++) {
        const availableBooks = remaining.filter(count => count > 0).length;
        if (groupSize > availableBooks) continue;
        
        const groupCost = groupSize * basePrice * (1 - discounts[groupSize]);
        const newRemaining = [...remaining];
        
        let selected = 0;
        for (let i = 0; i < newRemaining.length && selected < groupSize; i++) {
          if (newRemaining[i] > 0) {
            newRemaining[i]--;
            selected++;
          }
        }
        
        const remainingCost = dp(newRemaining);
        minCost = Math.min(minCost, groupCost + remainingCost);
      }
      
      memo.set(key, minCost);
      return minCost;
    }
    
    return dp(counts);
  }
  
  return Math.round(calculateMinCost(counts));
};
