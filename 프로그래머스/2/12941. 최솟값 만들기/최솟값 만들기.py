def solution(A,B):
    A.sort()
    B.sort(reverse=True)
    
    result = 0
    for idx in range(len(A)):
        result += A[idx]*B[idx]
        
    return result
    