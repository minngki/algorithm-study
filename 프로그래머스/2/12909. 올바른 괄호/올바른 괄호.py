def solution(input_str):
    check_list = []
    
    for s in input_str:
        if s == "(":
            check_list.append(s)
        else:
            try:
                check_list.pop()
            except:
                return False
    return False if len(check_list) else True
            
        
        