def solution(brown, yellow):
    total = brown + yellow
    
    for height in range(3, total+1):
        
        if total % height == 0:
            width = total / height
            
            if width >= height:
                if (width-2) * (height-2) == yellow:
                    return [width, height]
    



"""
o o o o
o x x o
o o o o 

o o o
o x o
o o o

o o o o o o o o
o x x x x x x o
o x x x x x x o
o x x x x x x o
o x x x x x x o
o o o o o o o o

1. 내가 구해야하는 것?
2. 알 수 있는 것 ???

## 중요 *** total = brown + yellow = w × h
## 오답 width * height = brown


total = brown + yellow = w × h
yellow = (width-2) * (height-2)
brown = (width * height) - yellow

... total의 약수 쌍을 찾으면 됨! 


"""