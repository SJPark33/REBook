<template>
  <div>
    <div class="preference-bg">
      <div class="preference-header">
        <img src="@/assets/images/REBOOK-removebg.png" class="login-logo" />
        <div class="checked-count">평가한 책 : {{ this.cnt }}권</div>
        <div class="done-box" v-if="this.cnt >= 10">
          <div class="done" @click="$router.push('/home')">완료!</div>
        </div>
      </div>
      <div class="description-container">
        <div class="description">10개 이상의 작품에 대한 평가를 해주세요.</div>
        <div class="description">
          이를 기반으로 RE:BOOK이 책을 추천해 드릴게요!
        </div>
      </div>
    </div>
    <div class="card-container">
      <div class="book-card" v-for="(pre, i) in preference" :key="i">
        <div class="preimage-box">
          <img :src="pre.book_image_path" alt="" class="pre-image" />
        </div>
        <div class="input-box">
          <div class="book-title">{{ pre.title }}</div>
          <div class="book-category">
            장르 : {{ pre["preference-category"] }}
          </div>
          <!-- <Rating class="heart-rate" v-model="yourLocalVariable"></Rating> -->
          <star-rating
            class="pre-rating"
            @rating-selected="preRating(pre)"
            :rating="rating"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import preference from "@/assets/bookdata/preference.json";
// import Rating from "v-rating";
import StarRating from "vue-star-rating";
import axios from "axios";
export default {
  name: "Preference",
  components: {
    // Rating,
    StarRating,
  },
  data() {
    return {
      preference: preference,
      yourLocalVariable: 0,
      rating: 0,
      cnt: 0,
      already_rated: [],
      // current_preference: [],
    };
  },
  created() {
    // this.current_preference = preference[]
  },
  mounted() {},
  methods: {
    setToken() {
      const token = localStorage.getItem("jwt");
      const config = {
        headers: {
          Authorization: token,
        },
      };
      return config;
    },
    preRating(pre) {
      const isbn = pre.isbn;
      const config = this.setToken();
      axios.post(
        "https://j4b206.p.ssafy.io/api/comment",
        // "http://localhost:8080/api/comment",
        {
          review: "리뷰",
          userEmail: localStorage.getItem("email"),
          rating: this.rating,
          isbn: isbn,
          book: pre,
        },
        config
      );
      if (this.already_rated.includes(isbn)) {
        console.log("already");
      } else {
        this.cnt = this.cnt + 1;
        this.already_rated.push(isbn);
      }
      // console.log(this.already_rated);
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Nanum+Gothic:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@800&display=swap");
.preference-bg {
  width: 100vw;
  height: 100%;
  /* background-color: beige; */
  padding-top: 7%;
  /* background-image: url("https://media.wired.com/photos/5e666c01ac94e900085c0f3d/master/w_2560%2Cc_limit/Biz-books-174638658.jpg");
  background-size: cover; */
}
.preference-header {
  width: 100%;
  height: 7%;
  background-color: rgba(199, 192, 157, 0.5);
  position: fixed;
  top: 0;
  z-index: 3000;
}
.login-logo {
  height: 100%;
  position: absolute;
  top: 0;
}
.checked-count {
  position: absolute;
  width: 15vw;
  margin-left: 77vw;
  font-size: 25px;
  margin-top: 8px;
  font-family: "Do Hyeon", sans-serif;
}
.done-box {
  position: absolute;
  width: 6vw;
  height: 80%;
  margin-top: 5px;
  margin-left: 90vw;
  background-color: rgb(37, 37, 12);
  border-radius: 15px;
  display: flex;
  align-items: center;
  font-family: "Do Hyeon", sans-serif;
  font-size: 25px;
  color: white;
}
.done-box:hover {
  cursor: pointer;
  background-color: rgb(97, 97, 76) !important;
}
.done {
  margin-top: 3px;
  width: 100%;
  text-align: center;
}
.description-container {
  /* font-family: "Nanum Gothic", sans-serif; */
  font-family: "Do Hyeon", sans-serif;
  /* height: 500px; */
  /* background-color: red; */
}
.description {
  font-size: 25px;
  margin: 0 auto;
  text-align: center;
  /* background-color: white; */
}
.card-container {
  /* margin-left: 5vw; */
  margin-top: 30px;
  width: 100vw;
  padding: 0 5vw;
  height: 200vh;
  /* background-color: beige; */
  /* margin-bottom: 30px; */
  padding-top: 30px;
  /* display: flex; */
}
.book-card {
  float: left;
  width: 44vw;
  height: 40vh;
  /* height: 50vh; */
  border: 2px solid black;
  margin: 0 1vw 40px 0;
  padding: 1vh 1vw;
  display: flex;
}
.preimage-box {
  height: 100%;
  width: 15vw;
  display: flex;
  justify-content: center;
  /* background-color: red; */
  margin-right: 1vw;
  align-items: center;
}
.pre-image {
  height: 90%;
  max-width: 14vw;
  border: 1px solid gray;
}
.input-box {
  width: 28vw;
  height: 100%;
  background-color: beige;
  font-family: "Nanum Gothic", sans-serif;
  font-weight: 900;
  /* padding: 2px; */
}
.book-title {
  width: 100%;
  height: 25%;
  padding: 10px;
  font-size: 1.2rem;
  /* background-color: yellow; */
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.book-category {
  width: 100%;
  height: 15%;
  /* background-color: gray; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.heart-rate {
  /* background-color: red; */
  z-index: 100000;
  width: 100%;
  height: 300px;
}
.pre-rating {
  width: 80%;
  height: 50%;
  padding-left: 8%;
  margin-left: 10%;
}
</style>
