<template>
  <div>
    <!-- first-category 선택하는 부분 -->
    <div
      class="first-category-container"
      style="height: 30px !important"
      v-if="domestic_count === 0"
    >
      <div
        style="
          width: 100%;
          height: 50px;
          font-family: 'Noto Serif KR', serif;
          font-size: 30px;
          padding-left: 15%;
        "
      >
        대분류를 선택해주세요
      </div>
    </div>
    <div class="first-category-container" v-if="domestic_count === 0">
      <button
        class="first-category"
        style="margin-right: 10%; margin-left: 20%"
        @click="finddomestic"
        :style="{ background: first_category_color }"
      >
        국내도서
      </button>
      <button
        class="first-category"
        style="margin-right: 10%"
        @click="findforeign"
      >
        외국도서
      </button>
    </div>
    <!-- 1st depth 선택 후 나타는 부분 -->
    <div class="result-container" v-if="domestic_count !== 0">
      <div class="result-category">카테고리 : {{ first_category }}</div>
      <div class="result-category" v-if="second_category !== ''">
        > {{ second_category }}
      </div>
      <div class="result-category" v-if="third_category.length !== 0">></div>
      <div
        class="result-category"
        v-for="(third, i) in third_category"
        :key="i"
      >
        {{ third }}
      </div>

      <!-- <div class="search-button-container">
        <button class="search-button">검색</button>
      </div> -->
    </div>

    <!-- 2nd depth 목록들 -->
    <div v-if="domestic_count === 1" class="second-category-container">
      <div
        style="
          width: 100%;
          height: 50px;
          font-family: 'Noto Serif KR', serif;
          font-size: 35px;
          padding-left: 3%;
          margin-bottom: 40px;
        "
      >
        중분류를 선택해주세요
      </div>
      <div v-for="(secondcategory, i) in second_categories" :key="i" :data="i">
        <button
          class="second-category"
          @click="determine_second(secondcategory)"
        >
          {{ secondcategory }}
        </button>
      </div>
    </div>

    <!-- 3rd depth 목록들 -->
    <div v-if="domestic_count === 2" class="third-category-container">
      <div
        style="
          width: 100%;
          height: 50px;
          font-family: 'Noto Serif KR', serif;
          font-size: 35px;
          padding-left: 3%;
          margin-bottom: 40px;
          min-width: 1100px;
        "
      >
        소분류를 선택(최대 3개)한 뒤, 검색을 눌러주세요
        <button class="search-button" @click="find_result">검색</button>
      </div>
      <div v-for="(thirdcategory, i) in third_categories" :key="i">
        <button
          class="third-category"
          @click="category_check(thirdcategory)"
          :style="{ color: back_colors[thirdcategory] }"
        >
          {{ thirdcategory }}
        </button>
      </div>
    </div>

    <!-- 여기서부터가 이제 마지막으로 최종 나오는 결과물 부분 -->
    <div v-if="domestic_count === 3" class="search-container">
      <div
        class="search-wrapper"
        v-for="(book, i) in currentpagebooks"
        :key="i"
      >
        <div
          class="image-box"
          @click.left="
            $router.push({ name: 'Detail', query: { isbn: book.isbn } })
          "
        >
          <img
            :src="book.book_image_path"
            alt=""
            class="cover-image"
            @click.right="rightclick(book)"
            @contextmenu.prevent
          />
        </div>
        <div class="title-box">
          <div class="title">
            {{ book.sliced_title }}
          </div>
        </div>

        <!-- 여기서부터 modal -->
        <div
          v-if="modalcheck === 1"
          class="modal-full"
          @mousedown="
            opened = false;
            modalcheck = 0;
            modal_button_activate = 0;
          "
        >
          <div class="modal-container" @mousedown.stop>
            <div class="book-open">
              <div class="book-container">
                <div class="modal-contents">
                  <div class="modal-title">
                    {{ status.title }}
                  </div>
                  <div class="modal-writer" v-if="status.writer.length > 0">
                    저자 : {{ status.writer }}
                  </div>
                  <div
                    class="modal-category"
                    v-if="status.subcategory.length > 0"
                  >
                    장르 : {{ status.subcategory }}
                  </div>
                </div>
                <div
                  class="modal-button-container"
                  v-if="modal_button_activate === 1"
                >
                  <div
                    class="modal-button"
                    :style="{ background: modal_button_color }"
                    @click.left="
                      $router.push({
                        name: 'Detail',
                        query: { isbn: status.isbn },
                      })
                    "
                  >
                    More Details!
                  </div>
                </div>
                <div id="card" :class="{ flipped: opened }">
                  <div class="front">
                    <img
                      class="front-img"
                      src="@/assets/images/REBOOK.png"
                      alt=""
                    />
                  </div>
                  <div class="back">
                    <img class="coverinback" :src="pathinbook" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pagenumber-container">
        <div class="pagenumber-box">
          <div class="pagenumber-all">
            <i
              class="fas fa-angle-double-left move-button"
              v-if="pages_idx !== 0"
              @click="toBeforePages"
            ></i>
            <i
              class="fas fa-angle-left move-button"
              v-if="currentpage !== 1"
              @click="toBefore"
            ></i>
            <div
              class="pages"
              v-for="(page_num, i) in currentpage_numbers"
              :key="i"
            >
              <div
                class="page"
                @click="select_page(page_num)"
                :class="{ current: currentpage === page_num }"
              >
                {{ page_num }}
              </div>
            </div>
            <i
              class="fas fa-angle-right move-button"
              v-if="currentpage < pagelength"
              @click="toAfter"
            ></i>
            <i
              class="fas fa-angle-double-right move-button"
              v-if="pages_idx < max_pages_idx"
              @click="toAfterPages"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import secondcategoryset from "@/assets/bookdata/second-category.json";
import allcategoryset from "@/assets/bookdata/categorystructure.json";
import allbookdatas from "@/assets/bookdata/bookdata.json";
import booksound from "@/assets/bookdata/책소리.mp3";

export default {
  data() {
    return {
      secondcategoryset: secondcategoryset,
      first_category: "",
      second_categories: [],
      second_category: "",
      domestic_count: 0,
      foreign_count: 0,
      first_category_color: "",
      third_categories: [],
      third_category: [],
      allcategoryset: allcategoryset,
      back_colors: {},
      categorized_books: [],
      allbookdatas: allbookdatas,
      countMouseOver: 0,
      modalcheck: 0,
      opened: false,
      pathinbook: "",
      pagelength: 0,
      currentpage: 1,
      currentpagebooks: [],
      currentpage_numbers: [],
      allpages: [],
      pages_idx: 0,
      max_pages_idx: 0,
      booksound,
      status: [],
      modal_button_activate: 0,
      modal_button_color: "white",
    };
  },
  methods: {
    finddomestic() {
      this.second_categories = this.secondcategoryset.국내도서;
      this.first_category = "국내도서";
      this.domestic_count++;
    },
    findforeign() {
      this.second_categories = this.secondcategoryset.외국도서;
      this.first_category = "외국도서";
      this.domestic_count++;
    },
    determine_second(value) {
      this.second_category = value;
      this.domestic_count++;
      if (this.first_category === "국내도서") {
        this.third_categories = this.allcategoryset.국내도서[
          this.second_category
        ];
      } else {
        this.third_categories = this.allcategoryset.외국도서[
          this.second_category
        ];
      }
      for (let i = 0; i < this.third_categories.length; i++) {
        this.back_colors[this.third_categories[i]] = "";
      }
    },
    category_check(value) {
      console.log(value);
      if (this.third_category.includes(value)) {
        this.third_category.splice(this.third_category.indexOf(value), 1);
        // console.log(this.third_category);
        this.back_colors[value] = "";
      } else if (this.third_category.length === 3) {
        alert("3개 초과로 선택하실 수 없습니다.");
      } else {
        this.third_category.push(value);
        this.back_colors[value] = "red";
        // console.log(this.third_category);
        // console.log(this.back_colors);
      }
    },
    find_result() {
      if (this.third_category.length === 0) {
        alert("소분류를 선택해주세요!");
      } else {
        this.domestic_count++;
        const new_categorized_books = [];
        this.categorized_books = this.allbookdatas.filter((data) => {
          return this.third_category.includes(data.subcategory);
        });
        for (let i = 0; i < this.categorized_books.length; i++) {
          if (
            this.categorized_books[i].maincategory.includes(
              this.second_category
            )
          ) {
            new_categorized_books.push(this.categorized_books[i]);
          }
        }
        this.categorized_books = new_categorized_books;
        this.currentpagebooks = this.categorized_books.slice(
          this.currentpage * 20 - 20,
          this.currentpage * 20
        );
        this.pagelength = parseInt((this.categorized_books.length + 19) / 20);
        for (let i = 0; i < this.pagelength; i++) {
          this.allpages.push(i + 1);
        }
        this.currentpage_numbers = this.allpages.slice(0, 5);
        this.max_pages_idx = parseInt((this.pagelength - 1) / 5);
      }
    },
    select_page(value) {
      this.currentpage = value;
      this.currentpagebooks = this.categorized_books.slice(
        value * 20 - 20,
        value * 20
      );
    },
    toAfterPages() {
      this.pages_idx = this.pages_idx + 1;
      this.currentpage_numbers = this.allpages.slice(
        this.pages_idx * 5,
        this.pages_idx * 5 + 5
      );
      this.currentpage = this.currentpage_numbers[0];
      this.currentpagebooks = this.categorized_books.slice(
        this.currentpage * 20 - 20,
        this.currentpage * 20
      );
    },
    toBeforePages() {
      this.pages_idx = this.pages_idx - 1;
      this.currentpage_numbers = this.allpages.slice(
        this.pages_idx * 5,
        this.pages_idx * 5 + 5
      );
      this.currentpage = this.currentpage_numbers[4];
      this.currentpagebooks = this.categorized_books.slice(
        this.currentpage * 20 - 20,
        this.currentpage * 20
      );
    },
    toBefore() {
      if (this.currentpage % 5 === 1) {
        this.toBeforePages();
      } else {
        this.select_page(this.currentpage - 1);
      }
    },
    toAfter() {
      if (this.currentpage % 5 === 0) {
        this.toAfterPages();
      } else {
        this.select_page(this.currentpage + 1);
      }
    },

    rightclick(value) {
      this.countMouseOver = 1;
      this.pathinbook = value.book_image_path;
      this.status = value;
      this.dolt();
    },
    dolt() {
      if (this.countMouseOver == 1) {
        this.modalcheck = 1;
        setTimeout(() => {
          this.opened = true;
        }, 800);
        setTimeout(() => {
          const audio = new Audio(booksound);
          audio.play();
        }, 300);
        setTimeout(() => {
          this.modal_button_activate = 1;
        }, 2000);
        // Detail 버튼 색깔
        setTimeout(() => {
          this.modal_button_color = "rgb(226, 175, 175)";
        }, 2300);
        setTimeout(() => {
          this.modal_button_color = "white";
        }, 2600);
        setTimeout(() => {
          this.modal_button_color = "rgb(226, 175, 175)";
        }, 2900);
        setTimeout(() => {
          this.modal_button_color = "white";
        }, 3200);
      }
    },
    // activarOver(value) {
    //   this.countMouseOver = 1;
    //   this.timecheck();
    //   this.pathinbook = value.book_image_path;
    // },
    // timecheck() {
    //   setTimeout(() => {
    //     this.dolt();
    //   }, 3000);
    //   console.log("타이머 작동");
    // },
    // timecheckout() {
    //   clearTimeout(this.timecheck());
    //   console.log("제거완료");
    // },
    // resetOver() {
    //   this.countMouseOver = 0;
    //   this.opened = false;
    //   console.log(this);
    //   this.timecheckout();
    // },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Jua&display=swap");

.first-category-container {
  margin-left: 13%;
  width: 74%;
  height: 160px;
  margin-top: 10px;
  display: flex;
  align-items: center;
}
.result-container {
  margin-left: 13%;
  width: 80%;
  /* background-color: rgb(112, 153, 240); */
  border-bottom: 2px solid green;
  min-width: 1700px;
  height: 100px;
  animation: fadein 1s;
  display: flex;
  align-items: center;
  padding: 20px;
  margin-bottom: 30px;
  font-family: "Jua", sans-serif;
  margin-top: -30px;
}
.result-category {
  margin-right: 20px;
  float: left;
  height: 40px;
  font-size: 30px;
  animation: fadein 1s;
}
.search-button-container {
  position: relative;
  /* float: right; */
  width: 100px;
  height: 100px;
  top: 30px;
  left: 8%;
}
.search-button {
  width: 150px;
  /* border: 3px solid rgb(103, 167, 112); */
  background-color: rgb(121, 174, 187);
  margin-left: 10%;
  border-radius: 10px;
  height: 60px;
  color: white;
}
.search-button:hover {
  background-color: rgb(23, 90, 107);
}
.first-category {
  background-color: white;
  height: 60px;
  width: 25%;
  font-size: 28px;
  font-family: "Do Hyeon", sans-serif;
  border: 1px solid rgb(241, 232, 232);
  border-radius: 20px;
}
.first-category:hover {
  background-color: rgb(114, 166, 201);
}
.second-category:hover {
  background-color: rgb(114, 166, 201);
}
.third-category:hover {
  background-color: rgb(114, 166, 201);
}
.second-category-container {
  margin-left: 20%;
  width: 60%;
  height: 200px;
  animation: fadein 1s;
}
.second-category {
  background-color: white;
  height: 50px;
  width: 200px;
  margin: 0.5%;
  /* display: inline-flex; */
  float: left;
  font-size: 20px;
  font-family: "Do Hyeon", sans-serif;
  border: 1px solid rgb(241, 232, 232);
  border-radius: 20px;
}
.third-category-container {
  margin-left: 15%;
  width: 70%;
  height: 200px;
  animation: fadein 1s;
  /* background-color: red; */
}
.third-category {
  background-color: white;
  height: 50px;
  width: 250px;
  margin: 0.5%;
  /* display: inline-flex; */
  float: left;
  font-size: 20px;
  font-family: "Do Hyeon", sans-serif;
  border: 1px solid rgb(241, 232, 232);
  border-radius: 20px;
}
.search-container {
  width: 90vw;
  min-width: 1500px;
  max-width: 1900px;
  margin-left: 5vw;
  height: 1500px;
  animation: fadein 1.5s;
}
.search-wrapper {
  width: 17%;
  border-radius: 15px;
  min-width: 300px;
  max-width: 380px;
  margin: 1.5%;
  height: 500px;
  background-color: white;
  float: left;
  box-shadow: 0 1.4px 1.7px rgba(0, 0, 0, 0.017),
    0 3.3px 4px rgba(0, 0, 0, 0.024), 0 6.3px 7.5px rgba(0, 0, 0, 0.1),
    0 11.2px 13.4px rgba(0, 0, 0, 0.3), 0 20.9px 25.1px rgba(0, 0, 0, 0.2),
    0 50px 60px rgba(0, 0, 0, 0.06);
}

.image-box {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80%;
  border-bottom: 2px solid brown;
  background-color: beige;
}
.cover-image {
  height: 100%;
  max-width: 95%;
  /* border: 1px solid black; */
}
.cover-image:hover {
  cursor: pointer;
  opacity: 0.35;
}
.title-box {
  background-color: rgb(241, 241, 207);
  height: 20%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}
.title {
  font-size: 18px;
  text-align: center;
  font-family: "Noto Serif KR", serif;
  max-height: 100%;
}
.modal-full {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  /* max-height: 1350px; */
  /* max-width: 2400px; */
  /* min-width: 1600px; */
  /* min-height: 900px; */
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1000;
  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(1px);
}
.modal-container {
  position: fixed;
  top: 19%;
  left: 22%;
  width: 60%;
  height: 60%;
  background-color: rgb(25, 37, 141);
  background-color: rgb(194, 210, 221);
  z-index: 1002;
  border-radius: 20px;
  background: linear-gradient(45deg, rgb(52, 109, 81), rgb(239, 245, 239));
}
.book-open {
  /* align-items: center; */
  width: 45%;
  margin-left: 50%;
  height: 80%;
  margin-top: 5.6%;
}
.book-container {
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  width: 100%;
  height: 100%;
  background-color: rgb(243, 236, 197);
  -webkit-perspective: 2000px;
  -moz-perspective: 800px;
  -o-perspective: 800px;
  perspective: 2000px;
  box-shadow: 1px 1px 2px #444 inset, -2px -2px 4px #444 inset;
}
.modal-contents {
  position: absolute;
  width: 100%;
  height: 80%;
  padding: 5% 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.modal-title {
  text-align: center;
  font-family: "Jua", sans-serif;
  font-size: 25px;
  background-color: white;
  margin-bottom: 5%;
}
.modal-writer {
  text-align: center;
  font-family: "Jua", sans-serif;
  font-size: 20px;
  height: 20%;
  /* background-color: white; */
}
.modal-category {
  text-align: center;
  font-family: "Jua", sans-serif;
  font-size: 20px;
  height: 20%;
  /* background-color: white; */
}
.modal-button-container {
  top: 80%;
  position: absolute;
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
.modal-button {
  float: right;
  width: 35%;
  text-align: center;
  /* background-color: red; */
  margin-right: 20px;
  font-family: "Jua", sans-serif;
  font-size: 20px;
  border-radius: 13px;
  border: 1px solid black;
  animation: fade-in 1s;
}
.modal-button:hover {
  cursor: pointer;
  background-color: rgb(75, 94, 124) !important;
}
#card {
  z-index: 2000;
  width: 100%;
  height: 100%;
  position: absolute;
  -webkit-transition: -webkit-transform 0.8s;
  -moz-transition: -moz-transform 0.8s;
  -o-transition: -o-transform 0.8s;
  transition: transform 0.8s;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform-origin: left center;
  -moz-transform-origin: right center;
  -o-transform-origin: right center;
  transform-origin: left center;
}
#card.flipped {
  -webkit-transform: translateY(00%) rotateY(-180deg);
  -moz-transform: translateY(00%) rotateY(-180deg);
  -ms-transform: translateY(00%) rotateY(-180deg);
  -o-transform: translateY(00%) rotateY(-180deg);
  transform: translateY(00%) rotateY(-180deg);
}
#card div {
  display: block;
  height: 100%;
  width: 100%;
  line-height: 260px;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 140px;
  position: absolute;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
}
#card div {
  text-shadow: 4px 5px 7px #080808;
  display: flex;
  justify-content: center;
  /* align-items: center; */
}
#card .front {
  background: rgb(40, 80, 50);
  margin: 0;
  padding-top: 10%;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

#card .back {
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background: rgb(243, 236, 197);
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
  margin: 0;
  padding: 2% 0;
  box-shadow: 1px 1px 2px #444 inset, -2px -2px 4px #444 inset;
}
.front-img {
  height: 50%;
  width: 90%;
  border-radius: 10px;
}
.coverinback {
  border: 1px solid black;
  height: 100%;
  max-width: 100%;
}
.pagenumber-container {
  width: 100%;
  height: 60px;
  /* background-color: yellow; */
  float: left;
  margin-top: 80px;
  margin-bottom: 80px;
}
.pagenumber-box {
  width: 500px;
  /* background-color: red; */
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.pagenumber-all {
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Jua", sans-serif;
}
.move-button {
  margin: 7px;
  font-size: 30px;
}
.move-button:hover {
  cursor: pointer;
  color: green;
}
.page {
  float: left;
  font-size: 35px;
  margin: 7px;
  margin-top: 11px;
}
.page:hover {
  cursor: pointer;
  color: green;
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.current {
  color: rgb(55, 55, 173);
  /* background-color: white; */
}
</style>
