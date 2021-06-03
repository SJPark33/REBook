(function(window, undefined) {
  var dictionary = {
    "83dd8172-1cac-4fb1-87f7-a75d068ee663": "카테고리",
    "7d3d56b8-2f78-4fd5-a612-1e2373b56ad0": "책상세-도서관 정보",
    "d018c8d0-606b-4c7c-8999-d1c1fdae16d3": "회원가입",
    "f332cef7-095d-4823-ab74-996cbed2ad39": "책상세-장터",
    "f649b2d7-811d-42e8-9328-ac21d1f91ee0": "채팅목록",
    "9b139920-9d20-42f0-8a55-c082a05be34a": "회원가입_장르및평점",
    "ec8eb13f-f00b-44ef-9026-75fa149f56d3": "회원가입인풋",
    "17200a81-af6c-43f0-8678-c12bd08310ac": "다른유저페이지",
    "451847e1-0ad8-4287-b392-951bd626af0e": "카테고리-hover",
    "40febade-723d-4bd5-a4bc-8850f9f2c729": "로그인",
    "69934c01-e0dc-403d-80ec-9f3382f60ae0": "책 상세페이지",
    "a7aec9a6-b5cc-4979-8c1e-fffcbd18c663": "로그인1",
    "03f56d18-402b-452c-a7e7-c2e45e859f23": "책검색",
    "09e08aab-e480-4d58-b33d-fbcfd7047fb0": "메인",
    "c96765dd-336f-438b-9db8-a54b526cb95c": "채팅",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "나의 책장",
    "8f1aff96-b24d-477c-8ad8-eea95bbbe756": "마이페이지",
    "f37e3f72-0337-419a-afdf-61155468ed9f": "비로그인_사이트 소개",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);