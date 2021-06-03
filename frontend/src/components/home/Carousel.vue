<template>
  <div
    id="carousel3d"
    style="
      width: 75vw;
      min-width: 1300px;
      height: 800px;
      display: block;
      margin: 0 auto;
    "
  >
    <div class="recom-carousel-title">RE:BOOK's RECOMMEND</div>
    <carousel-3d
      :perspective="0"
      :space="320"
      :display="5"
      :controls-visible="true"
      :controls-prev-html="'&#10092;'"
      :controls-next-html="'&#10093;'"
      :controls-width="60"
      :controls-height="60"
      :clickable="true"
      :autoplay="true"
      :autoplay-timeout="5000"
      style="height: 600px; min-height: 600px; max-width: 1800px !important"
    >
      <slide :index="0" style="height: 600px; border: 0px; max-width: 400px">
        <div class="recom-image-box">
          <img
            :src="recommended_books[0]['book_image_path']"
            alt=""
            class="recom-image"
            @click.left="
              $router.push({
                name: 'Detail',
                query: { isbn: recommended_books[0]['isbn'] },
              })
            "
          />
        </div>
      </slide>
      <slide :index="1" style="height: 600px; border: 0px; max-width: 400px">
        <div class="recom-image-box">
          <img
            :src="recommended_books[1]['book_image_path']"
            alt=""
            class="recom-image"
            @click.left="
              $router.push({
                name: 'Detail',
                query: { isbn: recommended_books[1]['isbn'] },
              })
            "
          />
        </div>
      </slide>
      <slide :index="2" style="height: 600px; border: 0px; max-width: 400px">
        <div class="recom-image-box">
          <img
            :src="recommended_books[2]['book_image_path']"
            alt=""
            class="recom-image"
            @click.left="
              $router.push({
                name: 'Detail',
                query: { isbn: recommended_books[2]['isbn'] },
              })
            "
          />
        </div>
      </slide>
      <slide :index="3" style="height: 600px; border: 0px; max-width: 400px">
        <div class="recom-image-box">
          <img
            :src="recommended_books[3]['book_image_path']"
            alt=""
            class="recom-image"
            @click.left="
              $router.push({
                name: 'Detail',
                query: { isbn: recommended_books[3]['isbn'] },
              })
            "
          />
        </div>
      </slide>
      <slide :index="4" style="height: 600px; border: 0px; max-width: 400px">
        <div class="recom-image-box">
          <img
            :src="recommended_books[4]['book_image_path']"
            alt=""
            class="recom-image"
            @click.left="
              $router.push({
                name: 'Detail',
                query: { isbn: recommended_books[4]['isbn'] },
              })
            "
          />
        </div>
      </slide>
      <slide :index="5" style="height: 600px; border: 0px; max-width: 400px">
        <div class="recom-image-box">
          <img
            :src="recommended_books[5]['book_image_path']"
            alt=""
            class="recom-image"
            @click.left="
              $router.push({
                name: 'Detail',
                query: { isbn: recommended_books[5]['isbn'] },
              })
            "
          />
        </div>
      </slide>
      <slide
        :index="6"
        style="height: 600px; border: 0px; max-width: 400px"
        class="abc"
      >
        <div class="recom-image-box">
          <img
            :src="recommended_books[6]['book_image_path']"
            alt=""
            class="recom-image"
            @click.left="
              $router.push({
                name: 'Detail',
                query: { isbn: recommended_books[6]['isbn'] },
              })
            "
          />
        </div>
      </slide>
    </carousel-3d>
  </div>
</template>
<script>
import axios from "axios";
import Preference from "@/assets/bookdata/preference.json";
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  components: {
    Carousel3d,
    Slide,
  },
  data() {
    return {
      slides: 7,
      recommended_books: Preference.slice(0, 7),
    };
  },
  created() {
    const email = localStorage.getItem("email");
    axios
      .get(`https://j4b206.p.ssafy.io/api/recobooks/${email}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Train+One&display=swap");
#carousel3d .carousel-3d-slide {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #fff;
  /* padding: 10px; */
  transition: all 0.4s;
}
.recom-carousel-title {
  text-align: center;
  margin-bottom: 30px;
  margin-top: -30px;
  font-size: 40px;
  font-family: "Train One", cursive;
  font-weight: 1000;
}
.recom-image-box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(192, 219, 188);
  border-radius: 20px;
}
.recom-image {
  width: 90%;
}
.recom-image:hover {
  cursor: pointer;
  opacity: 0.8;
  /* width: 100%; */
}
</style>
