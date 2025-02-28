num = int(input())
num_list = []

for i in range(num):
    inputed = int(input())
    num_list.append(inputed)

for num in sorted(num_list):
    print(num)


def bubble_sort():
    N=int(input())
    A=[]
    for _ in range(N):
        A.append(int(input()))
    
    
    for i in range(N-1):
        for j in range(N-1-i):
            if A[j] > A[j+1]:
                temp = A[j]
                A[j] = A[j+1]
                A[j+1] = temp
    
    for a in A:
        print(a)
