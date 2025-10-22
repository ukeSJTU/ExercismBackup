def square_root(number):
    """
    Binary Search: O(log n)
    """
    if number == 0:
        return 0
    if number == 1:
        return 1
    
    left = 1
    right = number
    
    while left <= right:
        mid = (left + right) // 2
        square = mid * mid
        
        if square == number:
            return mid
        elif square < number:
            left = mid + 1
        else:
            right = mid - 1
    
    # Just in case
    return -1
