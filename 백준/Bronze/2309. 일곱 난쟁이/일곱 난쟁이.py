import sys

input = sys.stdin.read 
data = list(map(int,input().splitlines()))

sum_ = sum(data)
N = len(data)

ex_1, ex_2 = None, None
for i in range(N):
    for j in range(i+1, N):
        if sum_ - data[i] - data[j] ==100:
            ex_1, ex_2 = data[i], data[j]
            break

result = [x for x in data if x not in (ex_1, ex_2)]
for r in sorted(result):
    print(r)


# import sys

# input = sys.stdin.read 
# data = list(map(int, input().splitlines()))
# N = len(data)

# for i in range(N-1):
#     sum_ = sum(data)
#     sum_ -= data[i] + data[i+1]
#     if sum_ == 100:
#         data.pop(i+1)
#         data.pop(i)
#         break

# for d in sorted(data):
#     print(d)
    