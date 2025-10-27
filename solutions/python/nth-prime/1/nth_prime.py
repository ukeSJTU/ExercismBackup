def prime(number):
    """Find the nth prime number.
    
    Args:
        number: The position of the prime to find (1-indexed)
    
    Returns:
        The nth prime number
    
    Raises:
        ValueError: If number is less than 1
    """
    if number < 1:
        raise ValueError('there is no zeroth prime')
    
    prime_generator = generate_primes()
    
    for _ in range(number):
        nth_prime = next(prime_generator)
    
    return nth_prime


def generate_primes():
    """Generate prime numbers indefinitely."""
    yield 2
    yield 3
    
    candidate = 5
    while True:
        if is_prime(candidate):
            yield candidate
        candidate += 2


def is_prime(n):
    """Check if n is prime using trial division.
    
    Args:
        n: Number to check
    
    Returns:
        True if n is prime, False otherwise
    """
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    
    # Check odd divisors up to sqrt(n)
    divisor = 3
    while divisor * divisor <= n:
        if n % divisor == 0:
            return False
        divisor += 2
    
    return True
