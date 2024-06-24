num = int(input())
num_list = []

for i in range(num):
    inputed = int(input())
    num_list.append(inputed)

for num in sorted(num_list):
    print(num)
    
   