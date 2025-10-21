def sum_of_multiples(limit, multiples):
    # Handle edge cases
    if limit <= 0 or not multiples:
        return 0
    
    # Create a set of all unique multiples
    unique_multiples = set()
    
    for base in multiples:
        if base > 0:  # Only process positive base values
            # Add all multiples of base that are less than limit
            unique_multiples.update(range(base, limit, base))
    
    return sum(unique_multiples)
