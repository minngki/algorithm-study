N = int(input())
A = list(map(int, input().split()))

S = [0]*N
total_sum = 0

for i in range(1,N):
    insert_point = i
    insert_value = A[i]
    for j in range(i-1, -1, -1): # j를 (i-1)~0 뒤에서부터 반복
        if A[j] < A[i]:
            # 현재 범위에서 삽입 위치 찾기
            insert_point = j+1
            break

        if j==0:
            insert_point = 0 
    for j in range(i, insert_point, -1): # j를 i~(insert_point+1) 뒤에서부터 반복
        # 삽입을 위해 삽입 위치에서 i까지 데이터 한 칸씩 뒤로 밀기
        A[j] = A[j-1]
    A[insert_point] = insert_value


S[0] = A[0]

for i in range(1, N): # 합 배열 만들기
    S[i]=S[i-1]+A[i]


sum = 0
for i in range(0,N): # 최종 SUM
    sum+=S[i]


print(sum)



def while_insertion():
    # 삽입 정렬과 합 배열 생성 및 합산을 동시에 수행
    total_sum = 0
    S = [0] * N
    
    for i in range(1, N):
        insert_value = A[i]
        j = i - 1
        
        # A[i]의 올바른 삽입 위치를 찾기
        while j >= 0 and A[j] > insert_value:
            A[j + 1] = A[j]
            j -= 1
        
        A[j + 1] = insert_value
        
        # 현재까지의 합 배열 계산 및 합산
        if i == 1:
            S[i - 1] = A[0]
        S[i] = S[i - 1] + A[i]
    
    # 합 배열의 합 계산
    total_sum = sum(S)
    
    print(total_sum)