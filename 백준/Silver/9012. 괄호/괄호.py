N = int(input())

for i in range(N):
    A=input()

    check = []
    for j in A:
        if j=='(':
           check.append(j)
        else:
            if check:
                check.pop()
            else:
                print("NO")
                break

    else: # for-else: break 문에 걸리면 해당 구문이 실행되지 않음
        print("NO" if check else "YES")
