import math

def score(x, y):
    distance = math.sqrt(x ** 2 + y ** 2)
    if distance > 10:
        score = 0
    elif distance > 5:
        score = 1
    elif distance > 1:
        score = 5
    else:
        score = 10
    return score
