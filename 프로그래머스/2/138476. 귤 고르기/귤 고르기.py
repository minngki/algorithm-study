import collections

def solution(k, tangerine):
    tangerine_counter = collections.Counter(tangerine)
    
    sorted_counts = sorted(tangerine_counter.values(), reverse=True)
    
    total = 0
    result_types = 0
    
    for cnt in sorted_counts:
        total += cnt
        result_types += 1
        
        if total >= k:
            return result_types
        
    return result_types

        
