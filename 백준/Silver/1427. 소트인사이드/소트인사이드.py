import sys
print = sys.stdout.write
A = list(input())

for i in range(len(A)):
    MAX = i
    for j in range(i+1, len(A)):
        if A[j] > A[MAX]: # 내림차순이니까 최댓값을 찾자.
            MAX = j
            
    if A[i] < A[MAX]:
        temp = A[i]
        A[i] = A[MAX]
        A[MAX] = temp
for a in A:
    print(a)