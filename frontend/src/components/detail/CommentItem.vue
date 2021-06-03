<template>
  <li class="c-item">
    <div class="c-header">
      {{ comment.nickname }}
      <div class="c-rating">
        <v-icon large> mdi-star-outline </v-icon>
        <p>{{ comment.rating }}</p>
      </div>
      <hr />
    </div>
    <p class="c-review">
      {{ comment.review }}
    </p>
  </li>
</template>

<script>
export default {
  name: "CommentItem",
  props: {
    comment: Object,
  },
};
</script>

<style scoped>
.c-item {
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: rgb(238, 236, 236);
}
.c-header {
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  /* background-color: red; */
}
.c-rating {
  width: 90px;
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 10%;
  font-size: 25px;
  background-color: white;
}
.c-review {
  text-align: left;
  font-size: 20px;
}
</style>
