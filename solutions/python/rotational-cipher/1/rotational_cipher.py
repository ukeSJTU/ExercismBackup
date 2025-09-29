def rotate(text, key):
    result = []
    
    # 标准化key值，确保在0-25范围内
    key = key % 26
    
    for char in text:
        if char.isalpha():
            # 判断是大写还是小写字母
            if char.isupper():
                # 处理大写字母 (A-Z)
                # 将字符转换为0-25的数字，应用旋转，然后转换回字符
                rotated = chr((ord(char) - ord('A') + key) % 26 + ord('A'))
                result.append(rotated)
            else:
                # 处理小写字母 (a-z)
                rotated = chr((ord(char) - ord('a') + key) % 26 + ord('a'))
                result.append(rotated)
        else:
            # 非字母字符（空格、标点符号等）保持不变
            result.append(char)
    
    return ''.join(result)
