def equilateral(sides):
    return sides[0] == sides[1] and sides[0] == sides[2] and sides[0] > 0


def isosceles(sides):
    a, b, c = sides
    if a <= 0 or b <= 0 or c <= 0:
        return False
    if not (a + b >= c and b + c >= a and a + c >= b):
        return False
    
    return a == b or b == c or a == c 


def scalene(sides):
    a, b, c = sides
    if a <= 0 or b <= 0 or c <= 0:
        return False
    if not (a + b >= c and b + c >= a and a + c >= b):
        return False
    
    return a != b and b != c and a != c
