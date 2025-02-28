from collections import deque

n = int(input())
deq = deque(enumerate(map(int, input().split())))
answer = []

while deq:
    idx, paper = deq.popleft()
    answer.append(idx + 1)

    if paper > 0:
        deq.rotate(-(paper - 1))
    elif paper < 0:
        deq.rotate(-paper)

print(' '.join(map(str, answer)))


# -1 % 2 = 1 ( -1 = 2 * -1 + (나머지))
# enumerate(반복을 지원하는 모든 객체, start index)