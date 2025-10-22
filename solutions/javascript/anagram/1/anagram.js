export const findAnagrams = (target, candidates) => {
  const sortWord = (word) => word.toLowerCase().split('').sort().join('');
  const targetSorted = sortWord(target);
  const targetLower = target.toLowerCase();
  
  return candidates.filter(
    candidate => 
      candidate.toLowerCase() !== targetLower && 
      sortWord(candidate) === targetSorted
  );
};