<template>
  <div class="container">
    <!-- <a href="http://localhost:8081/oauth2/authorization/google">Google Login</a> -->
    <Cover :book="book" />
    <Info
      :detailBookInfo="detailBookInfo"
      :book="book"
      @changeStatus="changeStatus"
      @openCommentModal="openCommentModal"
    />
    <hr />
    <Comment :detailBookInfo="detailBookInfo" @open-modal="isModal = true" />
    <Modal
      v-if="isModal"
      @close-modal="isModal = false"
      :detailBookInfo="detailBookInfo"
      :book="book"
    />
    <!-- <ModalContent @close-modal="this.$emit('close-modal')" />
    </Modal> -->
    <!-- <hr />
    <Recommend :detailBookInfo="detailBookInfo" /> -->
    <hr />
    <OneBookMarket
      :detailBookInfo="detailBookInfo"
      @open-Mmodal="isMModal = true"
    />
    <hr />
    <MarketModal
      v-if="isMModal"
      @close-modal="isMModal = false"
      @registerMarket="registerMarket"
      :detailBookInfo="detailBookInfo"
      :book="book"
    />
    <br />
  </div>
</template>

<script>
import axios from "axios";
import Cover from "@/components/detail/Cover.vue";
import Info from "@/components/detail/Info.vue";
import Comment from "@/components/detail/Comment.vue";
// import Recommend from "@/components/detail/Recommend.vue";
import OneBookMarket from "@/components/detail/OneBookMarket.vue";
import MarketModal from "@/components/detail/MarketModal.vue";
import Modal from "@/components/detail/Modal.vue";
import bookdata from "@/assets/bookdata/bookdata.json";

export default {
  name: "Detail",
  components: {
    Cover,
    Info,
    Comment,
    // Recommend,
    OneBookMarket,
    MarketModal,
    Modal,
  },
  props: {
    // book: Object,
  },
  data() {
    return {
      bookdata: bookdata,
      isModal: false,
      isMModal: false,
      book: null,
      detailBookInfo: null,
      isbn: this.$route.query.isbn,
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
    changeStatus: function (status) {
      // var ISBN = this.$route.params.book.isbn;
      console.log(this.book);
      const email = localStorage.getItem("email");
      if (email == null) {
        alert("로그인이 필요합니다.");
      }
      const _status = status;
      const info = {
        // userToken: localStorage.getItem("jwt"),
        email: email,
        status: _status,
        book: this.book,
      };
      const config = this.setToken();
      axios
        .put(
          `https://j4b206.p.ssafy.io/api/book/${email}`,
          // `http://localhost:8080/api/book/${email}`,
          info,
          config
        )
        .then(() => {
          console.log("성공");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    registerMarket: function (info) {
      const newInfo = info;
      newInfo["nickname"] = localStorage.getItem("nickname");
      this.detailBookInfo.market.push(newInfo);
    },
    openCommentModal() {
      this.isModal = true;
    },
  },
  created() {
    // 북db에서 isbn으로 해당 책 찾기
    var temp = this.bookdata.filter((data) => {
      return data.isbn.includes(this.isbn);
    });
    this.book = temp[0];
    const config = this.setToken();
    // back에 이 책과 관련된 코멘트,user정보 요청
    // const config = this.setToken();
    axios
      .get(`https://j4b206.p.ssafy.io/api/book/${this.isbn}`, config)
      // .get(`http://localhost:8080/api/book/${this.isbn}`, config)
      .then((res) => {
        console.log(`=================책detail응답`);
        console.log(res.data);
        console.log(res.data.object);
        this.detailBookInfo = res.data.object;
        this.$store.dispatch("get_marketInfo", res.data.object.market);
      })
      .catch((err) => {
        console.log("@@@@@@@@@@@@@@@@@@@책detail응답 에러");
        console.error(err);
      });
  },
};
</script>
<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
