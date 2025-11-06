def solution(info, n, m):
    INF = 10**9
    # dp[b] = B의 흔적 합이 b(<m)일 때 가능한 A의 최소 흔적 합
    dp = [INF] * m
    dp[0] = 0

    for a_i, b_i in info:
        ndp = [INF] * m

        for b in range(m):
            if dp[b] == INF:
                continue

            # 선택 1) A가 훔침: A 흔적 추가 (A < n 유지)
            a_next = dp[b] + a_i
            if a_next < n:
                if ndp[b] > a_next:
                    ndp[b] = a_next

            # 선택 2) B가 훔침: B 흔적 추가 (B < m 유지)
            b_next = b + b_i
            if b_next < m:
                if ndp[b_next] > dp[b]:
                    ndp[b_next] = dp[b]

        dp = ndp

    ans = min(dp)  # b = 0..m-1 중 A 최소
    return ans if ans < n else -1