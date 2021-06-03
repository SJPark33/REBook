import json

with open('서울특별시 도서관 현황.json', encoding='utf-8') as json_file:
    json_data = json.load(json_file)

# print(type(json_data))
# print(len(json_data['DATA']))

public_libs = []

for x in json_data['DATA']:
    if x['lbrry_se_name'] == '공공도서관':
        lib = {}
        # 도서관 명
        lib['lib_name'] = x['lbrry_name']
        # 도서관 일련번호
        lib['lib_code'] = x['lbrry_seq_no']
        # 주소
        lib['lib_addres'] = x['adres']
        # 전화번호
        lib['tel_no'] = x['tel_no']
        # 홈페이지 url
        lib['url'] = x['hmpg_url']
        # 운영시간
        lib['time'] = x['op_time']
        # 정기 휴관일
        lib['close_date'] = x['fdrm_close_date']

        public_libs.append(lib)

with open('공공도서관.json', 'w', encoding='utf-8') as make_file:
    json.dump(public_libs, make_file, ensure_ascii=False, indent="\t")





# {"tel_no":"02-459-5522",
# "gu_code":"0008","lbrry_seq_no":1935,
# "lbrry_intrcn":null,"adres":"서울특별시 강남구 자곡로 116",
# "tfcmn":null,"charger_email":null,"fxnum":null,
# "xcnts":"37.47153836","hmpg_url":"http://mglib.gangnam.go.kr",
# "code_value":"강남구","lbrry_se_name":"공공도서관","fond_year":null,
# "lbrry_name":"강남구립못골도서관","floor_dc":null,"fdrm_close_date":"매월 둘째, 넷째 화요일 및 일요일을 제외한 법정공휴일",
# "mber_sbscrb_rqisit":null,"ydnts":"127.096582","op_time":"평일 : 09:00~22:00, 주말 : 09:00~22:00","lon_gdcc":null},



