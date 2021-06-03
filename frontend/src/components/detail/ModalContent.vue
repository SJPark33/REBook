<template>
  <div class="m-content">
    <Stars />
    <form>
      <input
        type="text"
        class="c-input"
        v-model="comment.review"
        placeholder="이 작품에 대한 생각을 자유롭게 표현해주세요."
      />
    </form>
    <button class="btn" type="button" @click="onSubmit">저장</button>
    <button class="btn" @click="cancel">취소</button>
  </div>
</template>

<script>
// import Button from "./Button.vue";
import axios from "axios";
import Stars from "./Stars";
export default {
  name: "ModalContent",
  components: {
    Stars,
  },
  props: {
    book: Object,
  },
  data() {
    return {
      comment: {
        isbn: this.book.isbn,
        rating: localStorage.getItem("rating"),
        review: "",
        userEmail: localStorage.getItem("email"),
      },
    };
  },
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
    cancel: function () {
      console.log(this.comment);
      alert("저장하지 않고 이 페이지를 벗어나면, 변경사항을 잃게 됩니다.");
      this.$emit("close-modal");
    },
    onSubmit: function (event) {
      event.preventDefault();
      if (
        this.comment.review == null ||
        this.comment.review == "" ||
        this.comment.review == "undefined"
      ) {
        alert("내용을 입력해주세요.");
        return;
      } else {
        const info = this.comment;
        const config = this.setToken();
        axios
          .post(`https://j4b206.p.ssafy.io/api/comment`, info, config)
          // .post(`http://localhost:8080/api/comment`, info, config)
          .then(() => {
            console.log("성공");
            // localStorage.setitem("rating", 0);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
  mounted() {
    console.log("@@@@@@@@@@@@@@this.comment");
    console.log(this.comment);
  },
};
</script>

<style scoped>
.m-content {
  width: 100%;
  height: 380px;
  margin-top: 40px;
  z-index: 7;
  background-color: white;
}
input {
  width: 100%;
  height: 200px;
  text-align: center;
}
.btn {
  background-color: #345656;
}
</style>
