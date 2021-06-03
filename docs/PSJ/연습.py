import requests

serviceKey = '10bQis1dN4cW1MjTsgLQTFZ%2B8uGea%2BP5O4n6six7Us3IkDinlGd9%2B5QNmNDtZnGvVTZEOaIn5hH8lwQ0nPjiqg%3D%3D'

endpoint = 'http://api.visitkorea.or.kr/openapi/service/rest/EngService/areaCode?serviceKey={}&numOfRows=10&pageSize=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&areaCode=1&_type=json'.format(serviceKey)

resp = requests.get(endpoint)
a = resp.json()
print(resp)
print(endpoint)

print(a)