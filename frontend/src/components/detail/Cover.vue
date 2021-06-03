<template>
  <div class="b-img-box">
    <img class="b-img" :src="this.book.book_image_path" alt="책 표지" />
  </div>
</template>

<script>
export default {
  name: "Cover",
  props: {
    book: Object,
  },
};
</script>

<style scoped>
.b-img-box {
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  background-color: #445b54;
  margin: 1rem 0 3rem;
  padding: 2.5%;
}
.b-img {
  width: 445px;
  height: 656px;
}
</style>
