def find(search_list, value):
    if not search_list:
        raise ValueError("value not in array")
        
    left = 0
    right = len(search_list) - 1
    
    while left <= right:
        middle = (left + right) // 2
        middle_value = search_list[middle]

        if middle_value == value:
            return middle
        elif middle_value > value:
            right = middle - 1
        else:
            left = middle + 1
            
    raise ValueError("value not in array")