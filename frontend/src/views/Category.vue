<template>
  <div class="category-container">
    <!-- <div class="cate-title">
      <div class="cate">카테고리 검색</div>
    </div> -->
    <FirstCategory />
  </div>
</template>

<script>
import FirstCategory from "@/components/CategorySearch/FirstCategory.vue";
export default {
  name: "Category",
  components: {
    FirstCategory,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Jua&display=swap");

.category-container {
  width: 100vw;
  min-width: 1300px;
  /* margin-top: 10px; */
  height: 100vh;
  /* border: 1px solid black; */
}
.cate-title {
  width: 60%;
  margin-left: 20%;
  display: flex;
  align-items: center;
  height: 100px;
  background-color: yellow;
}
.cate {
  width: 100%;
  text-align: center;
  font-family: "Jua", sans-serif;
  font-size: 60px;
}
</style>
