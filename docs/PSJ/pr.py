import requests
import json

serviceKey = '594465765a746a643738537079646d'

endpoint = 'http://openapi.seoul.go.kr:8088/{}/json/SeoulLibraryBookSearchInfo/1/1000/'.format(serviceKey)


resp = requests.get(endpoint)
a = resp.json()

# print(endpoint)
print(a)
# print(type(resp))
print(resp)


with open('1.json', 'w', encoding='utf-8') as make_file:
    json.dump(a, make_file, ensure_ascii=False, indent="\t")