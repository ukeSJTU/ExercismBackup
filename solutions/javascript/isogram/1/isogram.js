export const isIsogram = (word) => {
  if (!word) return true;
  
  const cleanedWord = word
    .toLowerCase()
    .replace(/[\s-]/g, '');
  
  const letterSet = new Set(cleanedWord);
  
  return letterSet.size === cleanedWord.length;
};
