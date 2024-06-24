day, period = map(int, input().split())
temperatures = list(map(int, input().split()))

temp_sum = sum(temperatures[:period])
max_sum = temp_sum
for i in range(day-period):
    temp_sum += temperatures[i+period] - temperatures[i]
    max_sum = temp_sum if temp_sum > max_sum else max_sum
    
print(max_sum)
    
    
        
        
        
        
    