# -- 코드를 입력하세요
# SELECT * 
# from (
#     select
#     rh.start_date,
#     rh.end_date,
#         c.car_id as car_id,
#         c.car_type as car_type,
#         round(c.daily_fee*30*(100-dp.discount_rate)*0.01, 0) as fee 
#     from 
#         car_rental_company_car c
#         inner join car_rental_company_rental_history rh
#         on c.car_id = rh.car_id
#         left join car_rental_company_discount_plan dp
#         on c.car_type = dp.car_type
#         where (c.car_type = '세단' or c.car_type = 'SUV')
#             and dp.duration_type = '30일 이상'
#             and rh.start_date <= '2022-11-30'
#             and rh.end_date >= '2022-11-01') as t
# where
#     (fee >= 500000 and fee < 2000000)
# order by
#     t.fee desc, t.car_type asc, t.car_id desc;
    
SELECT T1.CAR_ID,
    T1.CAR_TYPE,
    ROUND(T1.DAILY_FEE * 30 * (100 - T2.DISCOUNT_RATE)/100) AS FEE
FROM CAR_RENTAL_COMPANY_CAR AS T1
    JOIN CAR_RENTAL_COMPANY_DISCOUNT_PLAN AS T2
        ON T1.CAR_TYPE = T2.CAR_TYPE AND T2.DURATION_TYPE = '30일 이상'
WHERE T1.CAR_TYPE IN ('세단', 'SUV')
    AND T1.CAR_ID NOT IN (
        SELECT CAR_ID
        FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
        WHERE END_DATE >= '2022-11-01' AND START_DATE <= '2022-11-30'
    )
HAVING FEE >= 500000 AND FEE < 2000000
ORDER BY FEE DESC, T1.CAR_TYPE ASC, T1.CAR_ID DESC;