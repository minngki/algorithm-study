def solution(nums):
    p_length = len(nums)
    max_get_length = len(nums)/2
    unique_pket = list(set(nums))
    unique_length = len(unique_pket)
    print(p_length, max_get_length, unique_pket, unique_length)
    return max_get_length if unique_length > max_get_length else unique_length

# 불필요하게 할 필요는 없었는데, 변수는 잘 설정해서 보여주는 게 더 중요함.
# 예를 들면, p_length는 없어도 됐을 것이며,
# unique_pket에서 list함수를 사용하는 것은 불필요한 연산이었음. len으로도 충분히 가능했기 때문

def solution(ls):
    return min(len(ls)/2, len(set(ls)))