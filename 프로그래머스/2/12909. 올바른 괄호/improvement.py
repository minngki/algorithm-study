def solution(s):
    stack = []

    for char in s:
        if char == '(':
            stack.append(char)
        else:
            if not stack:
                return False
            stack.pop()

    return not stack


"""
if 단순 분기 vs. try-except

1. if 문
    - 비교 연산 (CMP)
    - 조건 분기 (JE - Jump if Equal)
    - 실제 작업 (POP)

➡️약 2-3개의 CPU 명령어

2. try-except
1) 예외 발생
   - `IndexError` 객체 생성 (메모리 할당)
   - 예외 객체에 정보 저장 (타입, 메시지, 트레이스백)

2) 스택 언와인딩 (Stack Unwinding)
    현재 스택 프레임:
    [main] → [solution] → [pop] 

    예외 발생 시:
    - pop의 스택 프레임 정리
    - solution의 except 블록 찾기
    - 스택 트레이스 기록

3) 예외 핸들러 찾기
    - 현재 함수에서 except 블록 검색
    - 없으면 상위 호출 스택으로 이동
    - 매칭되는 예외 타입 확인

➡️ 약 수십~수백 개의 CPU 명령어
"""