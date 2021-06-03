<template>
  <div id="app" style="margin-top: 100px">
    <v-app id="inspire">
      <v-carousel
        height="750"
        hide-delimiter-background
        style="margin: 0 auto; width: 1900px"
      >
        <v-carousel-item v-for="(recommended, i) in recommended_books" :key="i">
          <v-sheet
            :color="recommended.contents.color"
            height="100%"
            style="padding-top: 0px"
          >
            <v-row class="fill-height" align="center" justify="center">
              <div class="recommend-text">박성준님을 위한 추천도서</div>
              <div class="content-container" v-if="i % 2 == 0">
                <img :src="recommended.src" alt="" class="book-cover1" />
                <div class="book-content1">
                  <h2 class="content-text1 content-text-title">
                    {{ recommended.contents.title }}
                  </h2>
                  <h2 class="content-text1">
                    저자 : {{ recommended.contents.author }}
                  </h2>
                  <h2 class="content-text1">
                    장르 : {{ recommended.contents.genre }}
                  </h2>
                </div>
              </div>
              <div class="content-container" v-if="i % 2 == 1">
                <img :src="recommended.src" alt="" class="book-cover2" />
                <div class="book-content2">
                  <h2 class="content-text content-text-title">
                    {{ recommended.contents.title }}
                  </h2>
                  <h2 class="content-text">
                    저자 : {{ recommended.contents.author }}
                  </h2>
                  <h2 class="content-text">
                    장르 : {{ recommended.contents.genre }}
                  </h2>
                </div>
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <!-- <div>asdklfjlasd</div> -->
    </v-app>
  </div>
</template>

<script>
export default {
  name: "ImageSlider",
  data() {
    return {
      recommended_books: [
        {
          src:
            "https://image.aladin.co.kr/product/26613/43/cover500/k192739031_1.jpg",
          contents: {
            title: "아르센 벵거 자서전",
            author: "아르센 벵거",
            genre: "건강/취미/레저",
            color: "rgb(48, 46, 43)",
          },
        },
        {
          src:
            "https://image.aladin.co.kr/product/24512/70/cover500/k392630952_2.jpg",
          contents: {
            title: "달러구트 꿈 백화점",
            author: "이미예",
            genre: "판타지/환상문학",
            color: "brown",
          },
        },
        {
          src:
            "https://image.aladin.co.kr/product/26722/17/cover500/k712730188_1.jpg",
          contents: {
            title: "진격의 거인 33",
            author: "이사야마 하지메",
            genre: "본격장르만화",
            color: "grey",
          },
        },
        {
          src:
            "https://image.aladin.co.kr/product/25964/44/cover500/8933871551_3.jpg",
          contents: {
            title: "모래알만 한 진실이라도",
            author: "박완서",
            genre: "한국에세이",
            color: "rgb(35, 123, 199)",
          },
        },
      ],
      bcolor: "white",
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap");

.contents {
  /* border: 3px solid blue !important; */
  width: 60vw;
  height: 100%;
  z-index: 0;
}
.recommend-text {
  text-align: center;
  margin-top: 30px;
  font-family: "Nanum Gothic", sans-serif;
  font-size: 40px;
}
.content-container {
  margin: 0 auto;
  margin-bottom: 40px;
  /* border: 3px solid blue; */
  width: 100%;
  height: 75%;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.5);
  /* opacity: 0.5; */
  z-index: 0;
}
.book-cover1 {
  float: left;
  height: 90%;
  margin-left: 1030px;
  margin-top: 1.25%;
}
.book-content1 {
  position: absolute;
  padding: 40px;
  height: 70%;
  width: 580px;
  margin-left: 450px;
  margin-top: 1.25%;
  /* border: 5px white solid; */
  /* border: 5px solid white; */
}
.book-cover2 {
  float: left;
  height: 90%;
  margin-left: 670px;
  margin-top: 1.25%;
}
.book-content2 {
  /* border: 5px white solid; */
  position: absolute;
  padding: 40px;
  height: 70%;
  width: 700px;
  margin-left: 1020px;
  margin-top: 1.25%;
}
.content-text {
  margin-top: 40px;
  margin-bottom: 80px;
  font-size: 32px;
  color: white;
  font-family: "Nanum Myeongjo", serif;
}
.content-text1 {
  margin-top: 40px;
  margin-bottom: 80px;
  font-size: 32px;
  color: white;
  text-align: right;
  font-family: "Nanum Myeongjo", serif;
}
.content-text-title {
  font-size: 42px;
}
</style>
