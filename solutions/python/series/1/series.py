def slices(series, length):
    """Extract all contiguous substrings of a given length."""
    # Validate inputs
    if length == 0:
        raise ValueError("slice length cannot be zero")
    
    if length < 0:
        raise ValueError("slice length cannot be negative")
    
    if not series:
        raise ValueError("series cannot be empty")
    
    if length > len(series):
        raise ValueError("slice length cannot be greater than series length")
    
    # Return all substrings using list comprehension
    return [series[i:i + length] for i in range(len(series) - length + 1)]
