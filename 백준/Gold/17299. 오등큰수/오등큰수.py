from collections import Counter

N = int(input())
A = list(map(int, input().split()))
F = Counter(A)

result = [-1] * N
stack = []

for idx, curr in enumerate(A):
    while stack and F[A[stack[-1]]] < F[curr]:
        stack_idx = stack.pop()
        result[stack_idx] = curr
    stack.append(idx)
print(" ".join(map(str,result)))