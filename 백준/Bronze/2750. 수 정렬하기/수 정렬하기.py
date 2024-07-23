num = int(input())
num_list = []

for i in range(num):
    inputed = int(input())
    num_list.append(inputed)

for num in sorted(num_list):
    print(num)



def bubble_sort():
    # 버블정렬 문제풀이입니다.
    N=int(input())
    A=[0]*N
    
    for i in range(N):
        A[i]=int(input())
    
        
    for i in range(N-1):
        for j in range(N-1-i):
            if A[j] > A[j+1]:
                temp = A[j]
                A[j] = A[j+1]
                A[j+1] = temp
                
    for i in range(N):
        print(A[i])
   
