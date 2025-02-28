# def solution(phone_book):
#     phone_book.sort()
#     for i in range(len(phone_book) - 1):
#         if phone_book[i + 1].startswith(phone_book[i]):
#             return False
#     return True

def solution(phone_book):
    phone_set = set(phone_book)  # 모든 번호를 해시셋(set)에 저장 (O(N))

    for number in phone_book:  # O(N)
        for i in range(1, len(number)):  # O(최대 20) (번호의 접두사 생성)
            if number[:i] in phone_set:  # O(1) 탐색 (접두사 확인)
                return False
    return True

# 성능 이슈: 중첩 for문은 무조건 피하자..
# def solution(phone_book):
#     for num in set(phone_book):
#         for target in set(phone_book):
#             if num != target and num == target[:len(num)]:
#                 return False
#     return True
                                
            
            