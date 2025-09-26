def label(colors):
    # 颜色到数字的映射
    color_values = {
        "black": 0,
        "brown": 1,
        "red": 2,
        "orange": 3,
        "yellow": 4,
        "green": 5,
        "blue": 6,
        "violet": 7,
        "grey": 8,
        "white": 9
    }
    
    # 获取前两个颜色的数值组成主要数值
    main_value = color_values[colors[0]] * 10 + color_values[colors[1]]
    
    # 第三个颜色代表零的个数
    zeros = color_values[colors[2]]
    
    # 计算最终的阻值
    resistance = main_value * (10 ** zeros)
    
    # 根据数值大小选择合适的单位
    if resistance >= 1_000_000_000:  # >= 1 billion
        return f"{resistance // 1_000_000_000} gigaohms"
    elif resistance >= 1_000_000:   # >= 1 million
        return f"{resistance // 1_000_000} megaohms"
    elif resistance >= 1_000:       # >= 1 thousand
        return f"{resistance // 1_000} kiloohms"
    else:
        return f"{resistance} ohms"
