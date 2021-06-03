# 데이터 수집을 위한 파이썬

### OPEN API를 활용하여 json 데이터 추출하기(공공데이터 API)



**보통 OPEN API 사용 방법**

1. API 사용 요청 / 키 발급
2. API 문서 확인
3. API 테스트 및 개발



연습으로 공공데이터 포털로 들어가서 영문 관광정보 서비스 api 를 이용해본다.

회원가입 / 로그인하고 api 활용 신청을 하고 승인이 되면, 인증키를 부여받는다.

인증키 : 10bQis1dN4cW1MjTsgLQTFZ%2B8uGea%2BP5O4n6six7Us3IkDinlGd9%2B5QNmNDtZnGvVTZEOaIn5hH8lwQ0nPjiqg%3D%3D



여기서 활용가이드를 확인하고,,

거기서 예시로 

http://api.visitkorea.or.kr/openapi/service/rest/EngService/areaCode?serviceKey=인증키&numOfRows=10&pageSize=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&areaCode=1

가 있는데 여기서 endpoint는 areaCode 까지이고, 그 뒤에는 endpoint에 전달하는 데이터가 될 것이다.

그리고 그 데이터들은, 요청 메시지(요청 parameter, request parameter)로 확인 가능하다.

위에서는, numOfRows, pageSize, pageNo, MobileOs, MobileApp, areaCode 가 해당된다.



그리고 여기서 '인증키'라고 써 있는 부분에는 내가 실제로 이전에 받은 인증키를 넣으면 된다.



여기서 하나의 스킬!

```python
위의 url에서 '인증키'라는 부분을 지운다.
그리고 기존의 인증키를 변수에 넣고, format()을 이용한다.

serviceKey = 10bQis1dN4cW1MjTsgLQTFZ%2B8uGea%2BP5O4n6six7Us3IkDinlGd9%2B5QNmNDtZnGvVTZEOaIn5hH8lwQ0nPjiqg%3D%3D
endpoint = 'http://api.visitkorea.or.kr/openapi/service/rest/EngService/areaCode?serviceKey={}&numOfRows=10&pageSize=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&areaCode=1'.format(serviceKey)

이렇게 하면, 동적으로 인증키를 입력 가능!

```



이제, endpoint는 설정을 했고, request parameter들도 다 입력을 한 상황

이제 여기서 데이터를 받아와서 저장을 해본다.

```python
resp = requests.get(endpoint)

print(resp.status_code)
print(resp.text)

# 를 입력해보면, 200 이라는 값이 출력되면 일단 정상적으로 동작을 한 것이다.
# 그리고 아래의 프린트에서는 데이터가 잘 출력되는지 확인을 하면 된다.

# 여기서 추가적으로, 데이터가 json 인 경우에는,
resp.json() #json() 함수를 통해서 객체를 바로 json(dict type)으로 받아 올 수 있다.
```







