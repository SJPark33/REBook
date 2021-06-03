# BeatifulSoup

```python
import requests
from bs4 import BeautifulSoup
```



```python
# URL에 요청 보내기
response = requests.get(URL)

# 받아온 HTML 코드로 BeautifulSoup 만들기
soup = BeautifulSoup(response.text, 'html.parser')
# html.parser는 HTML 코드를 정리해 줌 -> 형식 변환 툴
```



### 필요한 태그 가져오기

`.select()`와 `.select_one()` 메소드는 선택자를 통해 필요한 태그를 가져옴

```python
soup.select(selector)
# 리턴값: [tag1, tag2, ...]

soup.select_one(selector)
# 가장 먼저 나타나는 태그 리턴 / 리턴값: tag or None
```



### 태그에서 필요한 정보 가져오기

```python
# 텍스트
tag.get_text()
list(tag.strings)
list(tag.stripped_strings)
```



### 참고 파일

 