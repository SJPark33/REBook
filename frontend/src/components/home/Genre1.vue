<template>
  <div style="margin-bottom: 80px">
    <div class="genre1-title">{{ category }} TOP 30</div>
    <v-app id="inspire">
      <v-sheet
        class="mx-auto"
        elevation="8"
        max-width="1400"
        style="background-color: beige"
      >
        <v-slide-group
          v-model="model"
          class="pa-4"
          active-class="success"
          show-arrows
        >
          <v-slide-item v-for="(n, i) in result" :key="i">
            <v-card class="ma-4" height="300" width="180">
              <v-row class="fill-height" align="center" justify="center">
                <v-scale-transition>
                  <div class="genre1-image-box">
                    <img
                      :src="n.book_image_path"
                      alt=""
                      class="genre1-book-cover"
                      @click.left="
                        $router.push({
                          name: 'Detail',
                          query: { isbn: n.isbn },
                        })
                      "
                    />
                  </div>
                </v-scale-transition>
              </v-row>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-app>
  </div>
</template>
<script>
import selfimprovement from "@/assets/bookdata/genre1/자기계발.json";
import economy from "@/assets/bookdata/genre1/경제경영.json";
export default {
  data: () => ({
    model: null,
    category_set: [],
    result: "",
    category: "",
  }),
  created() {
    this.category_set.push(selfimprovement);
    this.category_set.push(economy);
    this.result = this.category_set[
      Math.floor(Math.random() * this.category_set.length)
    ];
    this.category = this.result[0]["maincategory"];
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");
.genre1-image-box {
  /* background-color: red; */
  width: 90%;
  height: 90%;
  margin-top: 12%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.genre1-book-cover {
  width: 97%;
  max-width: 100%;
  max-height: 100%;
  /* border: 1px solid rgb(53, 53, 18); */
}
.genre1-book-cover:hover {
  cursor: pointer;
  opacity: 0.5;
}
.ma-4 {
  background-color: rgb(47, 78, 35);
}
.genre1-title {
  text-align: center;
  margin-bottom: 20px;
  font-family: "Do Hyeon", sans-serif;
  font-size: 40px;
}
</style>
