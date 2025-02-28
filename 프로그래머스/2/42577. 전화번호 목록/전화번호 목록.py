"""
pick 으로 생각하면 쉬움. 해시 자체가 pick이기 때문에 순회가 아니라
slice된 number가 있는지만 단순하게 찾는 거임.
"""
def solution(phone_book):
    phone_set = set(phone_book)

    for number in phone_book:
        for i in range(1, len(number)):
            if number[:i] in phone_set:
                return False
    return True


# 해시 이용하지 않음.
# def solution(phone_book):
#     phone_book.sort()
#     for i in range(len(phone_book) - 1):
#         if phone_book[i + 1].startswith(phone_book[i]):
#             return False
#     return True



# 성능 이슈: 같은 길이의 중첩 for문은 무조건 피하자..
# def solution(phone_book):
#     for num in set(phone_book):
#         for target in set(phone_book):
#             if num != target and num == target[:len(num)]:
#                 return False
#     return True


