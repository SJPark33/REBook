[toc]

# img

```html
<img src={{ dummy.path }} alt="책 이미지">
```

- 아무 화면도 안뜬다. alt도 안뜸

- 붙여쓰면 컴파일 에러

- Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead

  

```html
<img :src="dummy.profileimg_path" alt="책 이미지">
```

- 이미지 및 다른 html도 잘 뜬다

# error

1. prettier/prettier delete cr

   > 해결
   >
   > ```js
   > .eslintrc.js    
   > "prettier/prettier": ["error", {
   >       "endOfLine":"auto"
   >     }]
   > ```

2. prettier/prettier delete '..'

   > 해결
   >
   > ```js
   > npm run lint --fix
   > ```
   >
   > 

# v-for에서 index is defined but never used

-------

![image-20210325073020860](vue%EC%97%90%EB%9F%AC.assets/image-20210325073020860.png)

- 정의되지 않았는데 render할 때 사용되니까 정의하고 사용하라는 뜻
- 발생이유
  - property: data(){} 내부에 정의하지 않은 경우

# 카카오 지도 api TypeError

![image-20210325093825244](vue%EC%97%90%EB%9F%AC.assets/image-20210325093825244.png)

혹은 Cannot read property 'current Style' of null

- 발생이유
  - 카카오api를 정의하는 script가 함수 실행 전에 와야 한다?
- 해결
  - current Style
    - index.html에 있던 script를 Map.vue 최상단(template 바로아래)에 정의

# icon이 안나옴

https://dev.eyegood.co.kr/entry/%EB%94%94%EB%B2%84%EA%B9%85-Uncaught-TypeError-is-not-a-function-%ED%95%B4%EA%B2%B0%EB%B2%95

![image-20210402015045913](vue%EC%97%90%EB%9F%AC.assets/image-20210402015045913.png)

- 시도 1 (실패)

  ![image-20210402015123722](vue%EC%97%90%EB%9F%AC.assets/image-20210402015123722.png)

- 시도 2 (응 안나와^^)

  1. `npm install @mdi/js`

  2. vuetify.js

     ```js
     export default new Vuetify({
       icons: {
         iconfont: 'mdiSvg',
       },
     })
     ```

  3. 사용하려는 곳에서 import

     ```js
     import { mdiStar } from '@mdi/js'
     ```

  4. data에 추가

     ```js
     data() { 
         return { 
             mdiStar,
         }
     }
     ```

  5. 사용

     ```html
     <v-icon>{{ mdiStar }}</v-icon>
     ```

- 시도 3 (안나옴 후)

  `<v-app>`으로 감싸주기

- 시도 4

  다른 라이브러리 사용 `vue-star-rating`

  [vue-star-rating - npm (npmjs.com)](https://www.npmjs.com/package/vue-star-rating)
  
- 시도 5

  다른 component에서 -를 사용하니 icon이 보였다.

  ex) mdiStar -> mdi-star

# v-slot

- Dynamic Directive Arguments

  ```vue
  v-bind:[attr]="value"
  ```

  ```vue
  
  ```

- https://www.digitalocean.com/community/tutorials/vuejs-vue-modal-component

# color

```vue
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      deepgreen: "#345656",
      green: "#4C7162",
      primary: colors.red.darken1,
    },
  },
});
export default vuetify;
```

- deepgreen custom도 안먹고
- colors import 해도 안먹는다.
- 후

# 모달 에러-input창 클릭시 모달 닫힘

해결: 이벤트 한정자(event modifier)

https://vuejs.org/v2/guide/render-function.html#Event-amp-Key-Modifiers

https://code-machina.github.io/2019/10/03/Vue-Story-Part-10.html

```vue
  <div class="overlay" @click.self="$emit('close-modal')">
```

해당 요소에만 click이벤트 적용되도록



# 우편 번호 api

![image-20210406162612043](vue%EC%97%90%EB%9F%AC.assets/image-20210406162612043.png)

- 시도 1

  cdn이 http용이랑 https용이랑 다름. http용으로 바꿨으나 안된다.

- 시도 2

  input에서 @click을 onclick으로 바꾸니 constructor 에러는 안난다.

  하지만 onclick="method의함수" 하면 method의 함수를 인식하지 못한다.

- 시도 3 (해결!!)

  index.html에 cdn 넣기

  

  

# 리팩토링

- modal v-slot으로 컴포넌트 재활용

# arrow function

- arrow function 뒤에서 this 사용 시, vue instance가 아니라 window를 가리킨다.

# unauthorized

- 한방에 다 보내주던걸
- 나눠서 변수로 저장 후 보내니까 잘 보내짐