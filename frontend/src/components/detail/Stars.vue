<template>
  <star-rating @rating-selected="setRating" :rating="rating" />
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating,
  },
  data() {
    return {
      rating: 0,
    };
  },
  methods: {
    setRating: function (rating) {
      this.rating = rating;
      localStorage.setItem("rating", this.rating);
      this.$emit("openCommentModal");
    },
  },
  mounted() {
    // this.rating = localStorage.getItem("rating") * 1;
  },
};
</script>

<style scoped></style>
