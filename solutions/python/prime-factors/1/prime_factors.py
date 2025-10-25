def factors(value):
    """Compute prime factors with optimization."""
    if value < 2:
        return []
    
    prime_factors = []
    
    # Check for factor 2
    while value % 2 == 0:
        prime_factors.append(2)
        value //= 2
    
    # Check for odd factors starting from 3
    divisor = 3
    while divisor * divisor <= value:
        while value % divisor == 0:
            prime_factors.append(divisor)
            value //= divisor
        divisor += 2  # Skip even numbers
    
    # If value is still greater than 1, it's a prime factor
    if value > 1:
        prime_factors.append(value)
    
    return prime_factors
