def say(number):
    """
    Convert a number to its English word representation.
    
    Args:
        number: An integer from 0 to 999,999,999,999
        
    Returns:
        String representation of the number in English words
        
    Raises:
        ValueError: If number is out of range
    """
    # Validate input range
    if number < 0 or number > 999_999_999_999:
        raise ValueError("input out of range")
    
    # Special case for zero
    if number == 0:
        return "zero"
    
    # Define word mappings
    ones = ["", "one", "two", "three", "four", "five", "six", "seven", 
            "eight", "nine"]
    
    teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
             "sixteen", "seventeen", "eighteen", "nineteen"]
    
    tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", 
            "seventy", "eighty", "ninety"]
    
    def convert_below_thousand(n):
        """Convert numbers from 0 to 999 to words."""
        if n == 0:
            return ""
        elif n < 10:
            return ones[n]
        elif n < 20:
            return teens[n - 10]
        elif n < 100:
            ten_digit = n // 10
            one_digit = n % 10
            if one_digit == 0:
                return tens[ten_digit]
            else:
                return tens[ten_digit] + "-" + ones[one_digit]
        else:  # n < 1000
            hundred_digit = n // 100
            remainder = n % 100
            result = ones[hundred_digit] + " hundred"
            if remainder > 0:
                result += " " + convert_below_thousand(remainder)
            return result
    
    # Break number into groups of three digits
    billions = number // 1_000_000_000
    millions = (number % 1_000_000_000) // 1_000_000
    thousands = (number % 1_000_000) // 1_000
    hundreds = number % 1_000
    
    # Build the result
    result_parts = []
    
    if billions > 0:
        result_parts.append(convert_below_thousand(billions) + " billion")
    
    if millions > 0:
        result_parts.append(convert_below_thousand(millions) + " million")
    
    if thousands > 0:
        result_parts.append(convert_below_thousand(thousands) + " thousand")
    
    if hundreds > 0:
        result_parts.append(convert_below_thousand(hundreds))
    
    return " ".join(result_parts)
