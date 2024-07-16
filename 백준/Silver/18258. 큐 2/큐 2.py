from collections import deque
from collections import deque
import sys

input = sys.stdin.read  # 여러 줄 입력에 대한 입출력 최적화
data = input().splitlines()

def push(x):
    que.append(x)

def pop():
    results.append(que.popleft() if que else -1)

def size():
    results.append(len(que))

def empty():
    results.append(0 if que else 1)

def front():
    results.append(que[0] if que else -1)

def back():
    results.append(que[-1] if que else -1)

# 명령어와 함수 매핑
commands = {
    'pop': pop,
    'size': size,
    'empty': empty,
    'front': front,
    'back': back,
}


N = int(data[0])
que = deque()
results = []
for i in range(1,N+1):
    order = data[i]
    if ' ' in order:
        cmd, num = order.split()
        push(num)
    else:
        commands[order]()

print('\n'.join(map(str, results)))

# N = int(input())
# que = deque()

# for i in range(0, N):
#     order = input()
#     if ' ' in order:
#         num = order.split(' ')[1]
#         que.append(num)
#     elif order == 'pop':
#         print(que.popleft() if que else -1)
#     elif order == 'size':
#         print(len(que))
#     elif order == 'empty':
#         print(0 if que else 1)
#     elif order == 'front':
#         print(que[0] if que else -1)
#     elif order == 'back':
#         print(que[-1] if que else -1)
