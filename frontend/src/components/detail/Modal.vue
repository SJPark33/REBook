<template>
  <div
    class="overlay"
    @click.self="$emit('close-modal')"
    @close-modal="$emit('close-modal')"
  >
    <div class="modal-card">
      <div v-if="book.title.length < 10">
        <p class="c-short-title">{{ book.title }}</p>
      </div>
      <div>
        <p class="c-long-title">{{ book.title }}</p>
      </div>
      <!-- <ModalContent @close-modal="$emit('close-modal')" /> -->
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
    </div>
  </div>
</template>

<script>
// import ModalContent from "./ModalContent.vue";
import axios from "axios";
import Stars from "./Stars";
export default {
  name: "Modal",
  components: {
    Stars,
  },
  props: {
    detailBookInfo: Object,
    book: Object,
  },
  data() {
    return {
      comment: {
        isbn: this.book.isbn,
        rating: localStorage.getItem("rating"),
        review: "",
        userEmail: localStorage.getItem("email"),
        book: this.book,
      },
    };
  },
  // components: {
  //   ModalContent,
  // },
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
        // const info = this.comment;
        const config = this.setToken();
        axios
          .post(`https://j4b206.p.ssafy.io/api/comment`, this.comment, config)
          // .post(`http://localhost:8080/api/comment`, this.comment, config)
          .then(() => {
            console.log("성공");
            this.$emit("close-modal");
            // localStorage.setitem("rating", 0);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style scoped>
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
}
.modal-card {
  position: relative;
  max-width: 40%;
  margin: auto;
  margin-top: 80px;
  padding: 40px;
  background-color: #345656;
  min-height: 500px;
  z-index: 6;
  color: white;
  text-align: center;
}
.c-short-title {
  font-size: 2rem;
}
.c-big-title {
  font-size: 1rem;
}

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
