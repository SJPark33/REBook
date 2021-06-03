from . import models
from .models import Book, Rating
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from sklearn.metrics.pairwise import cosine_similarity
import pandas as pd
import MySQLdb

@api_view(['GET'])
def recommend(request, user_id):

    # 책 데이터 불러오기
    with open('/django/backend/django/recommend/management/commands/aladinalldata.json', encoding='UTF-8') as books:
        books = pd.read_json(books)

    # AWS 환경 실행
    con = MySQLdb.connect('rebookdb.cr7qoevh9p3x.ap-northeast-2.rds.amazonaws.com', 'admin', 'ssafyb206!', 'rebookdb')
   
    # 로컬 환경 실행
    # con = MySQLdb.connect("127.0.0.1", 'root', 'ssafy107', 'rebookdb')
    
    cur = con.cursor()
    ratings = pd.read_sql_query('SELECT * FROM rating', con)

    # 데이터 출력 제한
    # pd.set_option('display.max_columns', 14)
    # pd.set_option('display.width', 10)

    # 데이터 통합
    book_ratings = pd.merge(books, ratings, on='isbn')
    title_user = book_ratings.pivot_table('rating', index='user_id', columns=['isbn', 'title', 'book_image_path', 'book_summary', 'evaluation', 'price', 'publisher', 'writer', 'country', 'maincategory', 'subcategory', 'categoryid', 'publish_date'])
    title_user.fillna(0, inplace=True)

    # 유저와 유저 간의 유사도 계산
    user_based_collab = cosine_similarity(title_user, title_user)
    user_based_collab = pd.DataFrame(user_based_collab, index=title_user.index, columns=title_user.index)

    # 사용자 기반 추천 목록 출력 및 JSON으로 변환
    user = user_based_collab[user_id].sort_values(ascending=False)[:7].index[1]

    recommend_books = title_user.loc[user].sort_values(ascending=False).to_json()

    book_list = []
    # 정보 dictionary화
    for keys, v in title_user.loc[user].sort_values(ascending=False).items():
        values = ('isbn', 'title', 'book_image_path', 'book_summary', 'evaluation', 'price', 'publisher', 'writer', 'country', 'maincategory', 'subcategory', 'categoryid', 'publish_date')
        book = dict(zip(values, keys))
        book_list.append(book)
    
    # 책 정보 전달
    return Response(book_list[:7])

    