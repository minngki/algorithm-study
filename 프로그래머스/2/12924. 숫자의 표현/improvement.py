"""
수학적으로 접근하려다, 규칙성을 못 찾아서 초반엔 완전탐색으로 풀었다.
연속적이라는 면에서 투포인터를 생각했는데, 생각보다 오래 걸렸다.
"""
def solution(n):
    count = 0
    start, end = 1, 1
    total = 1

    while end <= n:
        if total == n:
            count += 1
            total -= start
            start += 1
        elif total < n:
            end += 1
            total += end
        else:
            total -= start
            start += 1

    return count