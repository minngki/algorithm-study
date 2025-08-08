def solution(order):
    return sum(digit in '369' for digit in str(order))
            
    
# 처음 생각해낸 답
# def solution(order):
#     result = 0
#     for digit in str(order):
#         if digit in ('3','6','9'):
#             result += 1
            
#     return result
        
    