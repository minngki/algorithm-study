from collections import deque

N = int(input())

que = deque(range(1, N + 1))

while len(que) >1:
    que.popleft()
    que.append(que.popleft())

print(que[0])


# queue = list(range(1, N + 1))

# while 1 < len(queue):
#     queue.pop(0)
#     queue.append(queue.pop(0))

# print(queue[0])
