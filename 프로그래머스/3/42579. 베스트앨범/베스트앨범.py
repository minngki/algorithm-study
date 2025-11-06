from collections import defaultdict

def solution(genres, plays):
    # 1. 장르별 총 재생 횟수 저장
    genre_play_count = defaultdict(int)
    song_data = defaultdict(list)

    for i, (genre, play) in enumerate(zip(genres, plays)):
        genre_play_count[genre] += play  # 장르별 총 재생 횟수
        song_data[genre].append((i, play))  # 고유번호, 재생 횟수 저장

    # 2. 장르별 총 재생 횟수를 기준으로 내림차순 정렬
    sorted_genres = sorted(genre_play_count.keys(), key=lambda g: genre_play_count[g], reverse=True)

    result = []
    for genre in sorted_genres:
        # 3. 해당 장르에서 재생 횟수가 높은 순, 같다면 고유번호가 낮은 순으로 정렬
        sorted_songs = sorted(song_data[genre], key=lambda x: (-x[1], x[0]))

        # 4. 최대 2개까지 추가
        result.extend([song[0] for song in sorted_songs[:2]])

    return result