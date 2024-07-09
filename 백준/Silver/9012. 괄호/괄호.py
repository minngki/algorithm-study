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

    else:
        print("NO" if check else "YES")