# def is_not_empty_string(word):
#     return bool(word)

# def is_number(word):
#     return word[0].isdigit()

# def apply_upper_case(word):
#     return word if is_number(word) else word[0].upper() + word[1:].lower()

# def solution(s):
#     ## split string
#     splited_string_list = s.split(" ")
    
#     ## filter space -> 공백은 그대로 있어야함..
#     filtered_empty_string = list(filter(is_not_empty_string, splited_string_list))

#     ## 공백을 제거한 리스트를 기반으로 단어의 첫번째 인덱스를 숫자여부를 확인하고 문자열인 경우 UPPER CASE 적용한다
#     #### upper case 뿐만 아니라 나머지 값들은 lower 한다
#     result_list = list(map(apply_upper_case, filtered_empty_string))
    
#     ## jadenCase를 적용한 result_list 를 스페이스를 기준으로 string 으로 반환
#     return " ".join(result_list)
    
def solution(s):
    
    splited_string_list = s.split(" ")
    
    result = []
    for word in splited_string_list:
        if not word:
            result.append(word)
        elif word[0].isdigit():
            result.append(word.lower())
        else:
            transformed_word = word[0].upper() + word[1:].lower()
            result.append(transformed_word)
            
    return ' '.join(result)