def solution(phone_book):
    phone_book.sort()
    for i in range(len(phone_book) - 1):
        if phone_book[i + 1].startswith(phone_book[i]):
            return False
    return True

# 성능 이슈: 중첩 for문은 무조건 피하자..
# def solution(phone_book):
#     for num in set(phone_book):
#         for target in set(phone_book):
#             if num != target and num == target[:len(num)]:
#                 return False
#     return True
                                
            
            