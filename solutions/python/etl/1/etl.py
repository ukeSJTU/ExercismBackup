def transform(legacy_data):
    """
    Transform legacy letter scoring data from score-to-letters mapping
    to letter-to-score mapping with lowercase letters.
    
    Args:
        legacy_data: dict mapping scores to lists of uppercase letters
                    e.g., {1: ["A", "E"], 2: ["D", "G"]}
    
    Returns:
        dict mapping lowercase letters to their scores
        e.g., {"a": 1, "e": 1, "d": 2, "g": 2}
    """
    result = {}
    
    # Iterate through each score and its associated letters
    for score, letters in legacy_data.items():
        # For each letter in the list, create a mapping to the score
        for letter in letters:
            # Convert to lowercase and map to the score
            result[letter.lower()] = score
    
    return result
