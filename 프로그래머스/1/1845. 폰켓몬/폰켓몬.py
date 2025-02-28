def solution(nums):
    p_length = len(nums)
    max_get_length = len(nums)/2
    unique_pket = list(set(nums))
    unique_length = len(unique_pket)
    print(p_length, max_get_length, unique_pket, unique_length)
    return max_get_length if unique_length > max_get_length else unique_length

