from collections import Counter

def solution(nums):
    possible_cnt = len(nums)//2
    center_type_cnt = len(set(nums))
    
    if center_type_cnt >= possible_cnt:
        return possible_cnt
    else:
        return center_type_cnt
    
    
        