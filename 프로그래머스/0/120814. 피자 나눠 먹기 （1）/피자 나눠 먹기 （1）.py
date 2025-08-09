import math

def solution(n):
    PIECES_OF_PIZZA = 7
    divided = n/PIECES_OF_PIZZA
    return 1 if divided < 1 else math.ceil(divided)