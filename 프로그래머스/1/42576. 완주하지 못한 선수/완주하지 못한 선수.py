from collections import Counter

def solution(participant, completion):
    counter_participant = Counter(participant)
    counter_completion = Counter(completion)
    
    for name in participant:
        if counter_participant[name]!=counter_completion[name]:
            return name
        
