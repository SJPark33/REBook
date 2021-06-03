<template>
  <div class="container">
    <h1 class="temp">가나다</h1>
    {{ sample }}
    {{ sellInfo }}
  </div>
</template>

<script>
// <div v-for="(book, index) in sellInfo" v-bind:key="index">
//   {{ book.title }}
// </div>
// <ul v-for="(book, index) in sellInfo" v-bind:key="index" class="temp">
//   <!-- <li class="temp">{{ book.title }}</li> -->
//   <h1 class="temp">&&&&&&&&&&&&&&&&</h1>
// </ul>
import { mapState } from "vuex";
export default {
  name: "MarketInfo",
  props: {
    sellInfo: Array,
  },
  data() {
    return {
      sample: "샘플",
    };
  },
  computed: {
    ...mapState({
      sellInfo: (state) => state.sellInfo,
    }),
  },
};
</script>

<style scoped>
.container {
  width: 400px;
  height: 1200px;
  z-index: 2;
  margin-left: 0;
  background-color: blueviolet;
}
.temp {
  z-index: 3;
  background-color: red;
}
</style>
