def is_paired(input_string):
    """
    Check if all brackets, braces, and parentheses are properly matched and nested.
    
    Args:
        input_string: A string containing brackets [], braces {}, parentheses (), 
                     and other characters
    
    Returns:
        True if all pairs are matched and nested correctly, False otherwise
    """
    # Stack to keep track of opening brackets
    stack = []
    
    # Mapping of closing brackets to their corresponding opening brackets
    matching_brackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    
    # Opening brackets
    opening_brackets = set(['(', '[', '{'])
    
    # Process each character in the string
    for char in input_string:
        if char in opening_brackets:
            # Push opening bracket onto stack
            stack.append(char)
        elif char in matching_brackets:
            # It's a closing bracket
            if not stack:
                # No matching opening bracket
                return False
            
            # Check if the top of stack matches
            if stack[-1] == matching_brackets[char]:
                stack.pop()
            else:
                # Mismatched brackets
                return False
        # Ignore all other characters
    
    # If stack is empty, all brackets are matched
    return len(stack) == 0