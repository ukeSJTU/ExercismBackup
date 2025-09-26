def is_valid(isbn):
    # 移除连字符并转为大写
    clean_isbn = isbn.replace("-", "").upper()
    
    if len(clean_isbn) != 10:
        return False
    
    sum = 0
    for i, c in enumerate(clean_isbn):
        if c == 'X' and i == 9:  # 最后一位可以是X
            digit = 10
        elif c.isdigit():
            digit = int(c)
        else:
            return False
        
        sum += digit * (10 - i)  # 权重从10到1
    
    return sum % 11 == 0
