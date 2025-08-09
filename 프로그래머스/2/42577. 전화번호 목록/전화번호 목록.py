def solution(phone_book):
    # "사전순 정렬로 접두어 관계를 인접하게 배치"
    phone_book.sort()
    
    # "인접한 것들만 검사하면 충분"
    for i in range(len(phone_book) - 1):
        if phone_book[i+1].startswith(phone_book[i]):
            return False
    return True

    
# def solution(phone_book):
#     sorted_len_phone = sorted(phone_book, key=len)
#     sorted_phone = sorted(phone_book)
#     for sl in sorted_len_phone:
#         for s in sorted_phone:
#             if s.startswith(sl):
#                 if s!=sl:
#                     return False
#     return True        
      
        
# 문자열 비교인가? ❌ 문제의 본질을 놓침 → 막연한 접근
### ✅ "접두어 관계를 효율적으로 찾는 방법은?"
# 하나라도 포함되어있으면 return하는 거니까 문자열의 짧은 길이만큼 sorting 한 게 필요하겠군, 그래야 빨리 return 하니까. ❌ 조기 종료에만 집중해서 정작 효율적인 알고리즘을 놓쳤음.
### ✅ "정렬하면 접두어 관계가 인접하게 배치됨"
# 근데 문자열 길이 뿐만 아니라 문자열 자체의 sorting 리스트가 필요하겠다. 그래야 더 빨리 찾을테니까. 어차피 문자열 자체 문자열이니까 이것만 있어도 되는 거 아닌가?
# for문을 사용하고나서 중첩 for문이 되는 것 같아서 다른 방법을 생각중 ❌ 
### ✅ O(n²) 브루트포스부터 시작해서 최적화하는 것이 더 나았을 것.
# 결국 문자열 길이가 sorting된애들도 중요하지않을까? 문자열 길이가 가장 짧은 문자열이 꼭 문자열자체의 sorting했을때의 첫번재 문자열이 같을 거란 보장은 없어. 그럼 제외하면서 찾아가야할텐데 이게 맞을지 잘 모르겠네. 
### ❌ "길이별 정렬도 하고, 문자열 정렬도 하고..." → 과도한 복잡성 추구
### ✅ "정렬 후 인접한 것만 비교하면 충분"
# 하나씩 짧은 문자열을 기준으로 하나씩 지우고 제외해? 이것 자체가 반복 아닌가?
# 다시 for문을 쓰고나니, 연결리스트로 찾는 게 맞는지 모르겠어. (5분정도 시간지남)
# 막힘..
    
    
    
                                
            
            