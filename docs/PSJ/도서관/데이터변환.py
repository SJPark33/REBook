import json

with open('서울특별시 도서관 현황.json', encoding='utf-8') as json_file:
    json_data = json.load(json_file)

print(type(json_data))
print(len(json_data['DATA']))

small_libs = 0
public_libs = []
else_libs = []
for x in json_data['DATA']:
    if 'lbrry_se_name' in x:
        if x['lbrry_se_name'] == '작은도서관':
            small_libs += 1
        elif x['lbrry_se_name'] == '공공도서관':
            public_libs.append(x['lbrry_name'])
        else:
            else_libs.append(x['lbrry_se_name'])

# print(small_libs)
print(public_libs)
print(len(public_libs))
# print(len(public_libs))
# print(else_libs)