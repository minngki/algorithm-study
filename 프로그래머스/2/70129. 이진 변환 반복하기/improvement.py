def solution(s):
    convert_cnt = 0
    zero_deleted_cnt = 0
    target_binary_str = s

    while target_binary_str != '1':
        convert_cnt += 1

        cur_zero_cnt = target_binary_str.count('0')
        zero_deleted_cnt += cur_zero_cnt

        target_decimal = len(target_binary_str) - cur_zero_cnt
        target_binary_str = format(target_decimal, 'b')
        ## binary 자체가 string이라서 굳이 변환할 필요 없음

    return [convert_cnt, zero_deleted_cnt]
