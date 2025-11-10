def solution(n):
    ## 완전 탐색만 생각이 남,.
    
    n_binary_1_cnt = format(n, 'b').count('1')
    
    target = n+1
    
    while True:
        if format(target, 'b').count('1') == n_binary_1_cnt:
            break
        
        target += 1
        
    
    return target