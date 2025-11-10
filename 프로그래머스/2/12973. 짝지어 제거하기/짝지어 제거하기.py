## 슬라이딩 윈도우로 풀려고 했으나, indexing을 불필요하게 사용해야함
## 스택으로 하는 게 시간복잡도와 공간복잡도 측면에서 압도적으로 좋다.
# 그리고 pop을 index로 하게 되면 모든 요소들을 이동해야해서 O(n) 

def solution(s):
    stack = []
    
    for char in s:
        if stack and stack[-1] == char:
            stack.pop()
        else:    
            stack.append(char)
            
    return 0 if len(stack) else 1
        

# def solution(s):
## 오답
#  WINDOW_LENGTH = 2

#     result = 0
#     idx = 0

#     while len(s) >= WINDOW_LENGTH:
#         window = s[idx:idx+WINDOW_LENGTH]
#         print(len(s), idx, WINDOW_LENGTH, window)
#         result = 0
        
#         if window[0] == window[1]:
#             result = 1
#             s = s[:idx] + s[idx+WINDOW_LENGTH:]
#             idx=0
#             print(idx, s)
#         else:
#             idx+=1

#     return result