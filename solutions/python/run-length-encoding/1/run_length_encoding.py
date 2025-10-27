def decode(string):
    """Decode a run-length encoded string.
    
    Args:
        string: A run-length encoded string (e.g., "12WB12W3B24WB")
    
    Returns:
        The decoded string (e.g., "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB")
    """
    if not string:
        return ""
    
    result = []
    count = ""
    
    for char in string:
        if char.isdigit():
            count += char
        else:
            # If we have a count, repeat the character that many times
            # Otherwise, just add the character once
            repetitions = int(count) if count else 1
            result.append(char * repetitions)
            count = ""
    
    return "".join(result)


def encode(string):
    """Encode a string using run-length encoding.
    
    Args:
        string: A string to encode (e.g., "AABCCCDEEEE")
    
    Returns:
        The run-length encoded string (e.g., "2AB3CD4E")
    """
    if not string:
        return ""
    
    result = []
    count = 1
    
    for i in range(1, len(string)):
        if string[i] == string[i - 1]:
            count += 1
        else:
            # Add count only if greater than 1
            if count > 1:
                result.append(str(count))
            result.append(string[i - 1])
            count = 1
    
    # Don't forget the last run
    if count > 1:
        result.append(str(count))
    result.append(string[-1])
    
    return "".join(result)
