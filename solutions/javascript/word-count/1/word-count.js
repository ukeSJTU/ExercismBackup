//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (text) => {
  if (!text) {
    return {};
  }

  // 将文本转换为小写
  const lowerText = text.toLowerCase();
  
  // 使用正则表达式提取单词
  // 匹配：字母、数字，以及包含撇号的缩写词
  const words = lowerText.match(/[a-z0-9]+(?:'[a-z]+)?/g);
  
  if (!words) {
    return {};
  }
  
  const wordCount = {};
  
  for (const word of words) {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }
  
  return wordCount;
};
