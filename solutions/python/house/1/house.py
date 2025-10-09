def recite(start_verse, end_verse):
    # 定义每个元素：(主语描述, 动作)
    elements = [
        ("the house that Jack built", ""),
        ("the malt", "lay in"),
        ("the rat", "ate"),
        ("the cat", "killed"),
        ("the dog", "worried"),
        ("the cow with the crumpled horn", "tossed"),
        ("the maiden all forlorn", "milked"),
        ("the man all tattered and torn", "kissed"),
        ("the priest all shaven and shorn", "married"),
        ("the rooster that crowed in the morn", "woke"),
        ("the farmer sowing his corn", "kept"),
        ("the horse and the hound and the horn", "belonged to")
    ]
    
    result = []
    
    for verse_num in range(start_verse, end_verse + 1):
        # 构建当前节的文本
        verse_parts = []
        
        # 添加当前元素的介绍
        verse_parts.append(f"This is {elements[verse_num - 1][0]}")
        
        # 从当前元素往前递归添加所有连接
        for i in range(verse_num - 1, 0, -1):
            action = elements[i][1]
            target = elements[i - 1][0]
            verse_parts.append(f"that {action} {target}")
        
        # 将所有部分连接成一行，并添加句号
        verse_text = " ".join(verse_parts) + "."
        result.append(verse_text)
    
    return result
