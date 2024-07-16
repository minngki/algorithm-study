from collections import deque

N, W, L = map(int,input().split())
trucks = deque(map(int,input().split()))
bridge = deque([0]*W)
result = 0

total_weight = 0 
truck_index = 0 

while truck_index < N or total_weight > 0:
    result+=1

    cur_truck = bridge.popleft()
    total_weight -= cur_truck

    if truck_index < N:
        if total_weight + trucks[truck_index] <= L:
            bridge.append(trucks[truck_index])
            total_weight += trucks[truck_index]
            truck_index+=1
        else:
            bridge.append(0)
    else:
        bridge.append(0)


print(result)