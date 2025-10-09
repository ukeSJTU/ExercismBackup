def resistor_label(colors):
    # 颜色到数值的映射
    color_values = {
        "black": 0, "brown": 1, "red": 2, "orange": 3, "yellow": 4,
        "green": 5, "blue": 6, "violet": 7, "grey": 8, "white": 9
    }
    
    # 容差带的映射
    tolerance_values = {
        "grey": 0.05, "violet": 0.1, "blue": 0.25, "green": 0.5,
        "brown": 1, "red": 2, "gold": 5, "silver": 10
    }
    
    # 处理单带电阻器（只有黑色）
    if len(colors) == 1:
        if colors[0] == "black":
            return "0 ohms"
        else:
            raise ValueError("单带电阻器只能是黑色")
    
    # 处理四带和五带电阻器
    if len(colors) == 4:
        # 四带电阻器：值1-值2-倍数-容差
        value = color_values[colors[0]] * 10 + color_values[colors[1]]
        multiplier = color_values[colors[2]]
        tolerance = tolerance_values[colors[3]]
    elif len(colors) == 5:
        # 五带电阻器：值1-值2-值3-倍数-容差
        value = (color_values[colors[0]] * 100 + 
                color_values[colors[1]] * 10 + 
                color_values[colors[2]])
        multiplier = color_values[colors[3]]
        tolerance = tolerance_values[colors[4]]
    else:
        raise ValueError("颜色数量必须是1、4或5")
    
    # 计算最终阻值
    resistance = value * (10 ** multiplier)
    
    # 格式化阻值和单位
    if resistance >= 1_000_000:
        formatted_value = resistance / 1_000_000
        if formatted_value == int(formatted_value):
            unit_str = f"{int(formatted_value)} megaohms"
        else:
            unit_str = f"{formatted_value:g} megaohms"
    elif resistance >= 1_000:
        formatted_value = resistance / 1_000
        if formatted_value == int(formatted_value):
            unit_str = f"{int(formatted_value)} kiloohms"
        else:
            unit_str = f"{formatted_value:g} kiloohms"
    else:
        if resistance == int(resistance):
            unit_str = f"{int(resistance)} ohms"
        else:
            unit_str = f"{resistance:g} ohms"
    
    # 格式化容差
    if tolerance == int(tolerance):
        tolerance_str = f"±{int(tolerance)}%"
    else:
        tolerance_str = f"±{tolerance:g}%"
    
    return f"{unit_str} {tolerance_str}"