def steps(number):
    if number <= 0:
        raise ValueError("Only positive integers are allowed")
    if number == 1:
        return 0
    return 1 + steps(number / 2 if number % 2 == 0 else number * 3 + 1)
