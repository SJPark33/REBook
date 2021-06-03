<template>
  <div>
    <div class="info-container">
      <div class="s-img-box">
        <img class="s-img" :src="this.book.book_image_path" alt="책 이미지" />
      </div>
      <div class="info-box-right">
        <h2 class="book-title">{{ book.title }}</h2>
        <p>작 가: {{ book.writer }}</p>
        <p>출판사: {{ book.publisher }}</p>
        <p>정 가: {{ book.price }}원</p>
        <p>평 점: {{ book.evaluation }}</p>
        <div class="btn-container">
          <div class="dropdown">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" class="item-button item-status">
                  {{ status[current] }}
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  link
                  @click="changeStatus(index)"
                >
                  <v-list-item-title class="item-status">{{
                    item.title
                  }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
          <Stars @openCommentModal="handleCommentModal" />
        </div>
      </div>
    </div>
    <hr />
    <div class="desc-container">
      <div class="desc-box">
        <h3 class="d-title">책 소개</h3>
        <p v-if="book.book_summary == null" class="d-content">
          소개글이 없습니다.
        </p>
        <p v-else class="d-content">{{ book.book_summary }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Stars from "./Stars.vue";
export default {
  components: { Stars },
  name: "Info",
  props: {
    book: Object,
  },
  data() {
    return {
      status: ["+ 읽고싶어요", "-  읽는 중", "✓ 읽었어요"],
      current: 0,
      // color: ["#E91E63", "#F8BBD0", "#616161"],
      items: [
        { title: "+ 읽고싶어요" },
        { title: "-  읽는 중" },
        { title: "✓ 읽었어요" },
      ],
    };
  },
  methods: {
    changeStatus(index) {
      this.current = index;
      this.$emit("changeStatus", this.current);
    },
    handleCommentModal() {
      this.$emit("openCommentModal");
    },
  },
  mounted() {
    this.current = this.detailBookInfo.status;
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap");

.book-title {
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
  font-size: 40px;
}

p {
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;
}

.item-status {
  font-family: "Noto Sans KR", sans-serif;
  color: white;
}

.theme--light.v-btn.v-btn--has-bg[data-v-6d3f4828] {
  background-color: #445b54;
  color: white;
}

.theme--light.v-list {
  padding: 0;
}

#list-item-39 {
  background-color: #f6ac8b;
}

#list-item-40 {
  background-color: #afd7ce;
}

#list-item-41 {
  background-color: #69a9a3;
}

.info-container {
  width: 100%;
  height: 100%;
  display: flex;
  font-family: "Noto Sans KR", AppleSDGothicNeo, "Apple SD Gothic Neo",
    AppleSDGothicNeo-Light, HelveticaNeue-Light, "Malgun Gothic", "맑은 고딕",
    sans-serif;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 3rem;
}
.s-img-box {
  width: 844px;
  height: 617px;
  display: flex;
  justify-content: center;
  background-color: #445b54;
  margin-right: 1%;
}
.s-img {
  width: 317px;
  height: 442px;
  margin: auto 1rem;
}
.info-box-right {
  height: 100%;
  text-align: left;
  font-size: 35px;
  letter-spacing: 5px;
  word-spacing: 5px;
  line-height: 250%;
  padding: 1%;
}
.btn-container {
  display: flex;
  justify-content: flex-start;
  align-content: center;
}
.dropdown {
  width: 250px;
  height: 86.4px;
  margin-right: 10%;
  line-height: 0;
}
.theme--light.v-btn.v-btn--has-bg {
  width: 100%;
  height: 100%;
  font-size: 30px;
  background-color: hotpink;
}
.v-list-item__title {
  font-size: 25px;
}
.desc-box {
  display: flex;
  justify-content: center;
  margin: 4rem auto;
  /* background-color: blueviolet; */
}
.d-title {
  width: 300px;
  padding: 1rem;
  /* background-color: coral; */
}
.d-content {
  width: 1310px;
  font-size: 20px;
  line-height: 200%;
  padding: 1rem;
  /* background-color: burlywood; */
}
</style>
