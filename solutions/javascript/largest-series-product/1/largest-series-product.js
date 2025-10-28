export const largestProduct = (input, span) => {
  // 验证输入
  if (span < 0) {
    throw new Error('span must not be negative');
  }
  
  if (span === 0) {
    return 1;
  }
  
  // 移除空格和换行符
  const digits = input.replace(/\s/g, '');
  
  // 验证字符串只包含数字
  if (!/^\d*$/.test(digits)) {
    throw new Error('digits input must only contain digits');
  }
  
  // 验证span不超过字符串长度
  if (span > digits.length) {
    throw new Error('span must not exceed string length');
  }
  
  let maxProduct = 0;
  
  // 遍历所有可能的子序列
  for (let i = 0; i <= digits.length - span; i++) {
    // 计算当前子序列的乘积
    let product = 1;
    for (let j = i; j < i + span; j++) {
      product *= parseInt(digits[j]);
    }
    
    // 更新最大乘积
    maxProduct = Math.max(maxProduct, product);
  }
  
  return maxProduct;
};
