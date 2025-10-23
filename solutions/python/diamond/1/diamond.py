def rows(letter):
    if letter == 'A':
        return ['A']
    
    n = ord(letter) - ord('A')
    width = 2 * n + 1
    result = []
    
    for i in range(n + 1):
        current_letter = chr(ord('A') + i)
        leading_spaces = n - i
        
        if i == 0:
            line = ' ' * leading_spaces + current_letter + ' ' * leading_spaces
        else:
            middle_spaces = 2 * i - 1
            line = ' ' * leading_spaces + current_letter + ' ' * middle_spaces + current_letter + ' ' * leading_spaces
        
        result.append(line)
    
    for i in range(n - 1, -1, -1):
        result.append(result[i])
    
    return result
