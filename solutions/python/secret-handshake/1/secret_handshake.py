def commands(binary_str):
    # 定义每个位置对应的动作
    actions = {
        0: "wink",           # 最右边第1位 (2^0)
        1: "double blink",   # 最右边第2位 (2^1)
        2: "close your eyes", # 最右边第3位 (2^2)
        3: "jump"            # 最右边第4位 (2^3)
        # 第5位 (2^4) 是反转标志
    }
    
    result = []
    
    # 从右到左检查每一位（除了最左边的反转位）
    for i in range(min(4, len(binary_str))):
        # 从右边开始检查，所以索引是 -(i+1)
        if len(binary_str) > i and binary_str[-(i+1)] == '1':
            result.append(actions[i])
    
    # 检查是否需要反转（第5位，即最左边的位）
    if len(binary_str) >= 5 and binary_str[-5] == '1':
        result.reverse()
    
    return result