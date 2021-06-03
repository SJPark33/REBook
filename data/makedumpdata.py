import requests
import json


# 카테고리 CID 
# 국내소설
categoryDict = [1, 112011, 55889, 656, 798, 987, 74, 517, 1237, 170, 336, 2913]

# 해외소설
foreign_cate = [90842, 90845, 90853, 90855, 90847, 90848, 97827, 90835, 90854]
# 90842 5번 오류

book_list = [ItemNewAll, ItemNewSpecial, ItemEditorChoice, Bestseller, BlogBest]

key = 
key2 =

# 국내 도서 보관, 해외 도서 보관
book_info, book_info2 = [], []

# 국내소설 추출하기
for category in categoryDict:
    for startPage in range(100):

        url = "http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey={}&QueryType=ItemNewSpecial&MaxResults=10" \
            "&start={}&SearchTarget=Book&output=js&Version=20131101&Cover=Big&CategoryId={}".format(key2, startPage, category)
        json_dict = requests.get(url).json()
        # print(url)

        books = json_dict.get('item')

        for i in range(10):
            try:
                book = dict()
                book["isbn"] = books[i]['isbn']
                book["title"] = books[i]['title']
                book["book_image_path"] = books[i]['cover']
                book["book_summary"] = books[i]['description']
                book["evaluation"] = books[i]['customerReviewRank']
                book["price"] = books[i]['priceStandard']
                book["publisher"] = books[i]['publisher']
                book["writer"] = books[i]['author']
                book["categoryID"] = books[i]['categoryId']
                book["category"] = books[i]['categoryName'] 
                book["publish_date"] = books[i]['pubDate']
            except IndexError:
                break

            book_info.append(book)

# 해외도서 추출하기
book_info2 = []
for category in foreign_cate:
    for startPage in range(100):
        if category == 90842 and startPage == 5:
            pass
        else:

            url = "http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey={}&QueryType=BestSeller&MaxResults=10" \
                "&start={}&SearchTarget=Book&output=js&Version=20131101&CategoryId=90842".format(key2, startPage)
            json_dict = requests.get(url).json()
        # print(url)
        books = json_dict.get('item')

        for i in range(10):
            try:
                book = dict()
                book["isbn"] = books[i]['isbn']
                book["title"] = books[i]['title']
                book["book_image_path"] = books[i]['cover']
                book["evaluation"] = books[i]['customerReviewRank']
                book["price"] = books[i]['priceStandard']
                book["publisher"] = books[i]['publisher']
                book["writer"] = books[i]['author']
                book["categoryID"] = books[i]['categoryId']
                book["category"] = books[i]['categoryName'] 
                book["publish_date"] = books[i]['pubDate']
            except IndexError:
                break

            book_info2.append(book)

# 국내도서 json dump
with open('./bookinfo.json', 'w', encoding="utf-8") as make_file:
    json.dump(book_info, make_file, ensure_ascii=False, indent="\t")

# 해외도서 json dump
with open('./bookinfo2.json', 'w', encoding="utf-8") as make_file:
    json.dump(book_info2, make_file, ensure_ascii=False, indent="\t")

