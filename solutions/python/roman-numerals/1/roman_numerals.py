def roman(number):
    # 创建数值到罗马数字的映射表，按从大到小排序
    # 包含特殊的减法情况
    value_map = [
        (1000, 'M'),
        (900, 'CM'),
        (500, 'D'),
        (400, 'CD'),
        (100, 'C'),
        (90, 'XC'),
        (50, 'L'),
        (40, 'XL'),
        (10, 'X'),
        (9, 'IX'),
        (5, 'V'),
        (4, 'IV'),
        (1, 'I')
    ]
    
    result = ''
    
    # 从最大的值开始处理
    for value, numeral in value_map:
        # 计算当前值可以使用多少次
        count = number // value
        if count:
            # 添加对应次数的罗马数字
            result += numeral * count
            # 减去已经处理的部分
            number -= value * count
    
    return result
