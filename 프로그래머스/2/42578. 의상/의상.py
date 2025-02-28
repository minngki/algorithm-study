from collections import Counter
import math


def solution(clothes):
    category_count = Counter(category for _, category in clothes)
    return math.prod(cnt + 1 for cnt in category_count.values()) -1