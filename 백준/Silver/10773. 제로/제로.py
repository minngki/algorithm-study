N = int(input())

stack = []
for i in range(N):
    A=int(input())
    if A == 0:
        if stack:
            stack.pop()
    else:
        stack.append(A)
    
print(sum(stack))
