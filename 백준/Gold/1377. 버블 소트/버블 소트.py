import sys
input = sys.stdin.readline

N=int(input())
A=[]

for i in range(N):
    A.append((int(input()),i)) # tuple로 인덱스 지정해서 리스트 append
    
max_=0
sorted_A = sorted(A)

    
for i in range(N): # 정렬 전 index([i][1])와 정렬 후 index를 비교해 왼쪽으로 가장 많이 이동한 값을 찾으면 된다.
    if max_ < sorted_A[i][1] - i:
        max_ = sorted_A[i][1]-i


print(max_+1) # swap이 일어나지 않은 반복문이 한 번 더 실행되는 것을 감안해 최댓값에 1을 더한다.