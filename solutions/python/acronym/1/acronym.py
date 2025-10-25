def abbreviate(words):
    """Convert a phrase to its acronym using regex."""
    import re
    
    # Replace hyphens with spaces, then remove all non-letter/space characters
    words = words.replace("-", " ")
    words = re.sub(r"[^a-zA-Z\s]", "", words)
    
    # Get first letter of each word
    return "".join(word[0].upper() for word in words.split() if word)
